import React from 'react';
import { View, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import { useTheme } from '../../contexts/theme';

const Home: React.FC = ({ navigation }) => {

  const { darkTheme } = useTheme();
  return (
    <View style={styles.container}>
    <SafeAreaView>
        <TouchableOpacity style={{ alignItems: 'flex-end', margin: 8 }}>
        {darkTheme ? <Icon.Button name="bars" size={25} backgroundColor="#1c2434" color="rgb(242, 242, 242)" onPress={() => {navigation.openDrawer()}}></Icon.Button> :
        <Icon.Button name="bars" size={25} backgroundColor="rgb(242, 242, 242)" color="black" onPress={() => {navigation.openDrawer()}}></Icon.Button>
        }
        </TouchableOpacity>
    </SafeAreaView>
    </View>
      )
}

export default Home;

const styles = StyleSheet.create({
  container: {
      flex: 1,
  }
})