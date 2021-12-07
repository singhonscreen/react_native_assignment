import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity, } from 'react-native'

const ViewButtons = ({ changeView,changeView1, activebtn}) => {
    
    return (
        <View style={styles.btncontainer}>
            
            <TouchableOpacity  style={!activebtn ?  styles.btn : styles.activeBtn} onPress={() => changeView()  }>
            <Text  style={activebtn ? styles.btnActive  : styles.btnname} >Map</Text>
            </TouchableOpacity>
            <TouchableOpacity style={!activebtn ? styles.activeBtn : styles.btn} onPress={() =>   changeView1() }>
            <Text  style={!activebtn ? styles.btnActive  : styles.btnname} >List</Text>
            </TouchableOpacity>
            </View>
    )
}

export default ViewButtons

const styles = StyleSheet.create({
   
    btncontainer:{
        flexDirection:"row",
        justifyContent:"center",
        borderColor:"grey",
        borderWidth:1,
        margin:5 ,
        borderRadius:10,  
        backgroundColor:"white"
    },
    btn:{
        paddingHorizontal:25,
         flex:1,
         alignItems:"center",
        borderRadius:10,
        width: window.width,
        
    },
    activeBtn:{
        paddingHorizontal:25,
        backgroundColor:"blue",
         flex:1,
         alignItems:"center",
        borderRadius:10,
        width: window.width,
    },
   
  
    btnname:{
        color:"black",
        fontSize:30,
        
    },
    btnActive:{
       color:"white",
       fontSize:30,
       

    },
})
