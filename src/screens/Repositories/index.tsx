import React, { useEffect, useState } from 'react';
import { View, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Avatar, Text, Caption } from 'react-native-paper';
import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useAuth } from '../../contexts/auth';

import api from '../../services/api';

import { InfoFile, ImageContainer, ImageInfoShare } from './styles';

interface ItemData {
  name: string
  url: string
  key: string
  createdAt: Date
}

interface Props {
  route: any
}

const Repositories: React.FC<Props> = ({ route }) => {
  const { item } = route.params;
  const { box_id } = route.params;

  const { user } = useAuth();

  const [files, setFiles] = useState([]);
  const [itemSelected, setItem] = useState<ItemData>({} as ItemData);
  const [loading, setLoading] = useState(false);

  const openFile = async (file) => {

    const filePath = `${RNFS.DocumentDirectoryPath}/${file.name}`

    try {
      RNFS.downloadFile({
        fromUrl: file.url,
        toFile: filePath
      });

      await FileViewer.open(filePath);
    } catch (err) {
      console.log(err);
    }
  }

  const setSelectItem = async (item) => {
    item.selected = true;
    setItem(item)
  }

  const renderAnimatedItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectItem(item)}
      style={{}}>
      <ImageContainer>
        <Avatar.Image source={{ uri: item.url }} size={40} />
        <InfoFile>
          <Text>{item.key}</Text>
          <Caption>há {formatDistance(parseISO(item.createdAt), new Date(), {
            locale: pt
          })}</Caption>
        </InfoFile>
      </ImageContainer>
    </TouchableOpacity>
  );

  useEffect(() => {
    async function loadStorageData() {
      try {
        const files = await api.get(`/users/${user?.id}/boxes/${box_id}/files`)

        setFiles(files.data)
        setLoading(true)
      } catch (error) {
        console.log(error.message)
      }
    }
    loadStorageData();
  }, [])

  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{item}</Text>
        <Caption>Storage</Caption>
      </View>
      <View style={{ height: 380 }}>
        {!loading && (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="white" />
          </View>
        )}
        <ScrollView>
          <FlatList data={files} keyExtractor={file => String(file.id)} renderItem={renderAnimatedItem} />
        </ScrollView>
      </View>
      {loading && (
        <ImageInfoShare>
          <Text numberOfLines={1} style={{ fontWeight: 'bold', fontSize: 20 }}>{itemSelected.name}</Text>
          <Caption>Home/Documents</Caption>
          <Caption>{user?.username}</Caption>
          <TouchableOpacity
            onPress={() => openFile(itemSelected)}
            style={{ flexDirection: 'row', borderRadius: 14, height: 60, width: 340, alignSelf: 'center', backgroundColor: '#08088A', margin: 10, alignItems: 'center', }}>
            <Icon style={{ marginLeft: 20 }} name="share" color="white" size={24} />
            <Text style={{ fontSize: 20, marginLeft: 100 }}>Share</Text>
          </TouchableOpacity>
        </ImageInfoShare>
      )}
    </View>
  )
}


export default Repositories;