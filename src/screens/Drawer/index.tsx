import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Avatar, Drawer, Title, Caption, TouchableRipple, Switch, Text, useTheme, DarkTheme } from 'react-native-paper';

import { Container, DrawerContentSection, UserInfoSection } from './styles';

import { useTheme as useThemeContext} from '../../contexts/theme';

const DrawerContent: React.FC = (props) => {
  const paperTheme = useTheme();

  const { toogleTheme } = useThemeContext();
  
  
  return (
    <Container>
      <DrawerContentScrollView {...props}>
        <DrawerContentSection>
          <UserInfoSection style={{ flexDirection: 'row', marginTop: 10 }}>
            <View>
              <Avatar.Image
                source={{
                  uri: 'https://avatars0.githubusercontent.com/u/13907472'
                }}
                size={50}
              />
            </View>
            <View style={{ marginLeft: 15 }}>
              <Title>Gilmar Silva</Title>
              <Caption>@gilmazin</Caption>
            </View>
          </UserInfoSection>
          <Drawer.Section>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => { props.navigation.navigate('home')}}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Bookmarks"
              onPress={() => { }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => { props.navigation.navigate('profile')}}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="settings-outline" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => { }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Support"
              onPress={() => { }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => {toogleTheme()}}>
              <View>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark}/>
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </DrawerContentSection>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.BottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => { }}
        />
      </Drawer.Section>
    </Container>
  )
}

const styles = StyleSheet.create({
  BottomDrawerSection: {
    marginBottom: 15,
  }
})

export default DrawerContent;