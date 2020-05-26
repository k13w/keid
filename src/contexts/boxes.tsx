import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

import { useAuth } from './auth';

import { Files } from './files';

interface BoxesContextData {
  boxesState: Boxes[];
  handleNewBox(data: {
    name: string
  }): void
}

interface Boxes {
  id: number
  name: string
  files: Files[]
  user_id: number
}

const BoxContext = createContext<BoxesContextData>({} as BoxesContextData);

export const BoxProvider: React.FC = ({ children }) => {
  const { user } = useAuth();

  const [boxes, setBoxes] = useState([]);

  const [boxesState, setBoxesState] = useState([]);

  useEffect(() => {

    async function loadStorageData() {
      try {
        const storagedBoxes = await api.get(`/users/${user?.id}/boxes`)
        setBoxesState(storagedBoxes.data)
      } catch (error) {
        console.log(error.message)
      }
    }

    loadStorageData();
  }, [user])


  const handleNewBox = async (data) => {
    const { name } = data;

    const res = await api.post(`/users/1/boxes`, { name: name });

    setBoxes(res.data)
  };

  return (
    <BoxContext.Provider value={{ handleNewBox, boxesState }}>
      {children}
    </BoxContext.Provider>
  );
};

export function useBox() {
  const context = useContext(BoxContext);

  return context;
}