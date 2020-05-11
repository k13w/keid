import React from 'react';
import { View, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Text, Caption } from 'react-native-paper';

import { ProfileImage, InfoContainer, StatsContainer, StatsBox } from './styles';

const Profile: React.FC = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignSelf: 'center'}}>
          <ProfileImage>
            <Avatar.Image
              source={{ uri: 'https://i.imgur.com/kFeNIab.jpg' }}
              size={200}
            />
          </ProfileImage>
          <InfoContainer>
            <Text style={styles.text}>Elizabeth</Text>
            <Caption style={{ fontSize: 16 }}>Designer</Caption>
          </InfoContainer>
          <StatsContainer>
            <StatsBox>
              <Text style={styles.textStats}>483</Text>
              <Caption>Posts</Caption>
            </StatsBox>
            <StatsBox>
              <Text style={styles.textStats}>2130</Text>
              <Caption>Followers</Caption>
            </StatsBox>
            <StatsBox>
              <Text style={styles.textStats}>1242</Text>
              <Caption>Following</Caption>
            </StatsBox>
          </StatsContainer>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 36,
    fontWeight: "200"
  },
  textStats: {
    fontSize: 20,
    fontWeight: "300",
    padding: 2
  }
})