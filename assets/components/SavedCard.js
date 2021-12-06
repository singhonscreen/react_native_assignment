import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const SavedCard = () => {
    const resImg = {uri:"https://i.ibb.co/Pgtn1FK/food.jpg"}
    return (
        <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center", backgroundColor:"white",width:375,alignSelf:"center", padding:10}}>
        <View style={{flexDirection:"row", position:"absolute",top:2,right:5,alignItems:"center"}}>
        <MaterialIcons style={{paddingHorizontal:10}} name="save-alt" size={40} color="red" />
        <AntDesign style={{paddingHorizontal:5}} name="pluscircleo" size={24} color="red" />
        </View>
            <View >
            <Image style={{width:100,height:100}} source={resImg} alt="not found" />
            </View>
            <View style={{marginLeft:10}}>
            <Text style={{width:150, fontSize:18, fontWeight:"bold"}}>Conrad Chicago Restaurant</Text>
            <Text style = {{fontSize:16}}>963 Madison Drive Suite 679</Text>
            <View style={{flexDirection:"row"}}>
            <AntDesign name="star" size={24} color="gold" />
            <AntDesign name="star" size={24} color="gold" />
            <AntDesign name="star" size={24} color="gold" />
            <AntDesign name="star" size={24} color="gold" />
            <AntDesign name="star" size={24} color="gold" />
            </View>
            </View>
        </View>
    )
}

export default SavedCard

const styles = StyleSheet.create({})
