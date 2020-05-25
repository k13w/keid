import React, { createContext, useState, useContext, useEffect } from 'react';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

import { useAuth } from './auth';

interface FilesContextData {
  files: Files[];
  handleSelectImage(): void;
  handleImageSubmit(): void;
}

export interface Files {
  id: number;
  name: string;
  size: number;
  key: string;
  url: string;
  user_id: number;
}

const FileContext = createContext<FilesContextData>({} as FilesContextData);

export const FileProvider: React.FC = ({ children }) => {
  const { user } = useAuth();

  const [files, setFiles] = useState([]);
  const [images, setImage] = useState({});

  useEffect(() => {
      
    async function loadStorageData() {
      try {
        const storagedFiles = await api.get(`/users/${user?.id}/files`)
        setFiles(storagedFiles.data)
      } catch(error) {
        console.log(error.message)
      }
    }
    
    loadStorageData();
  }, [user])

  const handleSelectImage = () => {
    ImagePicker.launchImageLibrary({}, upload => {
      if (upload.error) {
        console.log('ImagePicker error');
      } else if (upload.didCancel) {
        console.log('Cancel by user')
      } else {
        const image = {
          uri: upload.uri,
          type: upload.type,
          name: upload.fileName
        }

        setImage(image);
      }
    })
  };

  const handleImageSubmit = async () => {
    const data = new FormData();

    data.append('originalName', images);

    await api.post('users/1/files')
  }

  return (
    <FileContext.Provider value={{ files, handleSelectImage, handleImageSubmit }}>
      {children}
    </FileContext.Provider>
  );
};

export function useFile() {
  const context = useContext(FileContext);

  return context;
}