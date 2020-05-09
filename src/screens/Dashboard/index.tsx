import React from 'react'
import { View, Button } from 'react-native';
import { useAuth } from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const { singOut } = useAuth();
  function HandleSingOut() {
    singOut();
  }
  return (
    <View>
      <Button title="Logout" onPress={HandleSingOut} />
    </View>
  )
}

export default Dashboard;