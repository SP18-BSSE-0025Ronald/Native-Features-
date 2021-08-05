import React, {useState} from 'react';
import {View , Text, StyleSheet} from 'react-native';
import  MapView, {Marker} from 'react-native-maps' ;

const MapScreen = ()=>{
  const [SelectedLocation, setSelectedLocation] = useState();

   const MapRegion ={
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
   }

   const SelectedLocaitonHandler = (event) =>{
     setSelectedLocation({
    lat: event.nativeEvent.coordinate.latitude,
    lng: event.nativeEvent.coordinate.longitude
    });
   }

   let markercoordinate ;

   if(SelectedLocation){
      markercoordinate={
        latitude: SelectedLocation.lat,
        longitude: SelectedLocation.lng
      }
   }



  return (
     <MapView style={styles.map} region={MapRegion} onPress={SelectedLocaitonHandler}>

       {markercoordinate && (
          <Marker title="Picked Location" coordinate={markercoordinate} />
       )}
     </MapView>
  )
}

const styles = StyleSheet.create({
  map:{
    flex: 1
  }
});

export default MapScreen;