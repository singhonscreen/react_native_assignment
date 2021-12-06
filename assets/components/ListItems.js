import React, { useState } from 'react'
import {  StyleSheet, View, } from 'react-native';
// import MapViewPage from './MapViewPage';
import Menu from './Menu';
import PlaceList from './PlaceList';
// import MapView1 from './MapView1';
import ViewButtons from './ViewButtons';


const ListItems = ({navigation}) => {
    
     const [viewscreen, setViewScreen] = useState(false)
    const changeView = ()=>{
        navigation.navigate('MapView1')
    }
     
    const changeView1 = ()=>{
        navigation.navigate('Profile')
    }
    return (
        <View style={{ marginVertical:10}}>
            <ViewButtons setViewScreen={setViewScreen} changeView={changeView} changeView1={changeView1}/>
           
            <View style={{width:400,height:75, justifyContent:"center", backgroundColor:"white",   marginBottom:10, position:"absolute",bottom:20, zIndex:1}} >
            <Menu />
            </View>
            <PlaceList /> 
        </View>
    )
}

export default ListItems


