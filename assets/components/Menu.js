import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Menu = () => {
    return (
        <View style={{flexDirection:"row",  justifyContent:"space-evenly"}}>
        <View style={styles.contain}>
        <Fontisto name="compass-alt" size={26} color="black" />
        <Text style={{fontSize:14}}>Map</Text>
        </View>
        <View style={styles.contain}>
        <MaterialCommunityIcons name="calendar-range-outline" size={26} color="black" />
        <Text style={{fontSize:14}}>My Trips</Text>  
        </View>
        <View style={styles.contain}>
        <MaterialIcons name="saved-search" size={26} color="black" />
        <Text style={{fontSize:14}}>Saved Places</Text>  
        </View>
        <View style={styles.contain}>
        <Fontisto name="tripadvisor" size={26} color="black" />
        <Text style={{fontSize:14}}>Plan Trip</Text>  
        </View>
        <View style={styles.contain}>
        <Ionicons name="md-person" size={26} color="black" />
        <Text style={{fontSize:14}}>Profile</Text>  
        </View>
       
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    contain:{
        alignItems:"center"
    }
})
