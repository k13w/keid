import React from 'react'
import { View, Button, Text } from 'react-native';
import { useAuth } from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const { singOut } = useAuth();
  function HandleSingOut() {
    singOut();
  }
  return (
    <View>
      <Text>sasa</Text>
    </View>
  )
}

export default Dashboard;