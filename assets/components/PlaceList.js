import React from 'react'
import { StyleSheet, Text, View,FlatList,Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const image = { uri: "https://i.ibb.co/TMTkhSP/the-seminyak-beach-resort.jpg" };
const data = [
    {
        imageUrl : image,
        heading:"Seminayak", 
    },
    {
        imageUrl : image,
        heading:"Seminayak", 
    },
    {
        imageUrl : image,
        heading:"Seminayak", 
    },
    {
        imageUrl : image,
        heading:"Seminayak", 
    },
    {
        imageUrl : image,
        heading:"Seminayak", 
    },
    {
        imageUrl : image,
        heading:"Seminayak", 
    },
    {
        imageUrl : image,
        heading:"Seminayak", 
    },
    {
        imageUrl : image,
        heading:"Seminayak", 
    },
    {
        imageUrl : image,
        heading:"Seminayak", 
    },
    
]

const PlaceList = () => {
    return (
        <View style={{margin:20,  }}>
                <FlatList  keyExtractor={(elem)=>elem.heading+Math.random()*100}
                data = {data}
                renderItem = {(({item})=>{
                  return(
                      <View style={{flexDirection:"row", padding:10, alignItems:"center",backgroundColor:"white", borderRadius:10,marginVertical:5}} >
                      <Image style={{width:100,height:100}} source={item.imageUrl} />
                      <View style={{marginLeft:10,}}> 
                      <Text style={{fontSize:25,fontWeight:"bold"}}>{item.heading}</Text>
                      <View style={{flexDirection:"row",paddingTop:10}}>
                      <Entypo name="location-pin" size={24} color="black" />
                      <Text style={{fontSize:18}}>Bali</Text>
                      </View>
                      </View>
                      </View>
                  )
                })}
               
                />
            </View>
            
    )
}

export default PlaceList

const styles = StyleSheet.create({})
