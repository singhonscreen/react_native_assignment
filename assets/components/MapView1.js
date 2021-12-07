import React,{useState} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import ViewButtons from './ViewButtons';
import SavedCard from './SavedCard';

const MapView1 = ({navigation}) => {
    const [activebtn, setActivebtn] = useState(true)
    const changeView = ()=>{
        navigation.navigate('MapView1')
        setActivebtn(true)
    }
     
    const changeView1 = ()=>{
        setActivebtn(false)
        navigation.navigate('ListItems')
    }
    return (
        <View style={styles.container}>
        <View >
        <MapView style={styles.map} />
        </View>
        <View style={styles.viewBtn}>
        <ViewButtons activebtn={activebtn}  changeView={changeView} changeView1={changeView1}/>
        <View style={{position:"relative",top:500}}>
        <SavedCard />
        </View>
        </View>
        </View>
    )
}

export default MapView1

const styles = StyleSheet.create({
    viewBtn:{
        position:"absolute",
        top:10,
        width:400,
        zIndex:1
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
