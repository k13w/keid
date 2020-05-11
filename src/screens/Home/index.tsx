import React from 'react';
import { View, Text, Button, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'


const Home: React.FC = ({ navigation }) => {
    function navigateToUsers() {
        navigation.openDrawer()
    }
    return (
        <>
    <View style={styles.container}>
        <SafeAreaView>
            <TouchableOpacity style={{ alignItems: 'flex-end', margin: 8 }}>
            <Icon.Button name="bars" size={25} backgroundColor="#FFF" color="black" onPress={() => {navigation.openDrawer()}}></Icon.Button>
            </TouchableOpacity>
        </SafeAreaView>
        <Text>a</Text>
        <Text>a</Text>
        <Text>a</Text>
        <Text>a</Text>
        <Text>a</Text>
        <Text>a</Text>
    </View>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    }
})

export default Home;