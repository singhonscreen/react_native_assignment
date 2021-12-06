import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading} >Welcome to our page</Text>
            <Button title="Got to See list"  onPress={() =>
                navigation.navigate('ListItems')
              } />
              
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    heading:{
        fontSize:30,
        fontWeight:"bold"
    },
   
})
