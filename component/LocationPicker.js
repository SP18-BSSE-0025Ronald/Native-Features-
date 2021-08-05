import React, {useState}  from 'react';
import {
    View,
    Button,
    Text,
    ActivityIndicator,
    Alert,
    StyleSheet
  } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Colors  from '../constant/Colors';
import MapPreview from './MapPreview';


const LocationPicker = (props)=>{
   const [fetching, SetFetching] = useState();
   const [Pickedlocation, setPickedLocation] = useState();
     
   const VerifyLocation = async ()=>{
    const result = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND);
       if(result.status !== 'granted'){
           Alert.alert('Insufficient Persmissions!',
           'You need to grant location permissions to use this app.',
           [{text: 'Okay'}]
           );
           return false;
       }
       return true;
    }
  
     const getLocationHandler = async ()=>{
         const hasPermission = await VerifyLocation();
         if(!hasPermission){
             return;
         }
         try{
             SetFetching(true);
             const location = await Location.getCurrentPositionAsync({timeout: 5000});
             console.log(location);
             setPickedLocation({
               lat : location.coords.latitude,
               lng: location.coords.longitude
             });
         }catch(err){
             Alert.alert("Could not fetch location!",
             "Please try again to access your location",
             [{text: "Okay"}]
             );
            SetFetching(false);
         }
     }
  
     const pickMapLocation = ()=>{
       props.navigation.navigate('MapScreen');
     }


   return (
      <View style={styles.locationPicker}>
  
         <MapPreview style={styles.mapPreview} location={Pickedlocation} onPress={()=>pickMapLocation }>
            {fetching ?  ( 
            <ActivityIndicator size='large'  color={Colors.primary}/>)
              :( <Text>No location chosen yet </Text>
              )}
              </MapPreview>
           <View style={styles.actions}>
           <Button title="Get Location" onPress={ getLocationHandler} color={Colors.primary} />
           <Button title="Open the Map" onPress={ pickMapLocation } color={Colors.primary} />
          
           </View>
          
          
      </View> 
   )
}

const styles = StyleSheet.create({locationPicker: {
    marginBottom: 15
  },
  mapPreview: {
    marginBottom: 10,
    width: '100%',
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  }
});

export default LocationPicker;