import React from 'react';
import { View, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView, FlatList, TouchableWithoutFeedback   } from 'react-native';
import { Avatar, Paragraph, Caption, Text } from 'react-native-paper';
import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/FontAwesome5'

import { useTheme } from '../../contexts/theme';
import { useBox } from '../../contexts/boxes';
import { useFile } from '../../contexts/files';

import {  StoragedContainer ,InfoStoraged, FolderContainer, FolderIcon, FolderDescription, ImageContainer, InfoFile } from './styles';

const Home: React.FC = ({ navigation }) => {

  const { darkTheme } = useTheme();
  const { files, handleSelectImage, handleImageSubmit } = useFile();

  const { boxesState } = useBox();


  const renderAnimatedItem = ({ item }) => (

    <TouchableOpacity 
      onPress={() => {}}
      style={{}}>
          <ImageContainer>
            <Avatar.Image source={ { uri: item.url }} size={40} />
            <InfoFile>
            <Text>{item.key}</Text>
            <Caption>há {formatDistance(parseISO(item.createdAt), new Date(), {
              locale: pt
            })}</Caption>
            </InfoFile>
          </ImageContainer>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity style={{ alignItems: 'flex-end', margin: 8 }}>
          {darkTheme ? <Icon.Button name="bars" size={25} backgroundColor="#1c2434" color="rgb(242, 242, 242)" onPress={() => { navigation.openDrawer() }}></Icon.Button> :
            <Icon.Button name="bars" size={25} backgroundColor="rgb(242, 242, 242)" color="black" onPress={() => { navigation.openDrawer() }}></Icon.Button>
          }
        </TouchableOpacity>
      </SafeAreaView>
      
      <StoragedContainer>
        <InfoStoraged>
          <Caption>Used</Caption>
          <Paragraph style={{ fontSize: 20}}>72%</Paragraph>
          <Caption>9,25 / 15 GB</Caption>
        </InfoStoraged>
      </StoragedContainer>

      <View style={{ flexDirection: 'row' }}>
        <ScrollView>
          <FlatList horizontal={true} showsHorizontalScrollIndicator={false} data={boxesState} keyExtractor={ box => String(box.id)} renderItem={({ item }) => (
            <FolderContainer onPress={() => navigation.navigate('repositories', { item: item.name, box_id: item.id })}>
            <FolderIcon>
              <Avatar.Icon size={50} icon="folder" />
            </FolderIcon>
            <FolderDescription>
              <Paragraph style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Paragraph>
              <Caption>7,5 GB</Caption>
            </FolderDescription>
            </FolderContainer>
          )} />
        </ScrollView>
      </View>

      <View style={{ marginTop: 16 }}>
      <Text style={{ marginLeft: 12 }}>Last Files:</Text>
      </View>  
      <View style={{ flex: 1, marginTop: 10}}>
      <ScrollView>
        <FlatList data={files} keyExtractor={file => String(file.id)} renderItem={renderAnimatedItem} />
      </ScrollView>
      </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})