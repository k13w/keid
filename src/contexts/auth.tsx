import React, { createContext, useState, useEffect, useContext } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  user: User| null;
  singIn(data: User): Promise<void>;
  singOut(): void;
}

interface User {
  username: string;
  email: string;
  password: string;
}

interface Response {
  token: string;
  user: {
    email: string;
    passweord: string;
    username: string;
  };
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {

      const storagedUser = await AsyncStorage.getItem('@KeidAuth:user');
      const storagedToken = await AsyncStorage.getItem('@KeidAuth:token');

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      } else if (!storagedUser && !storagedToken) {
        setLoading(false);
      }
    }
    loadStorageData();
  }, [])

  async function singIn(data) {
    const { email, password } = data;

    const res = await api.post<Promise<Response>>('sessions', { email, password });

    const { token, user } = res.data;

    setUser(user);


    api.defaults.headers.Authorization = `Bearer ${token}`;

    await AsyncStorage.setItem('@KeidAuth:user', JSON.stringify(user));
    await AsyncStorage.setItem('@KeidAuth:token', token);
  }

  function singOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    })
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, loading, user, singIn, singOut }}>
      {children}
    </AuthContext.Provider> 
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}