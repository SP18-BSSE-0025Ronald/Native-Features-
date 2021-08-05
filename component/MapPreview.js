import React from 'react';
import {TouchableNativeFeedback,  View, Image, StyleSheet} from 'react-native';
import Env from '../env';


const MapPreview = (props)=>{
  let imageUrl;
    if(props.location){
      imageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${
        props.location.lat
      },${
        props.location.lng
      }&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${
        props.location.lat
      },${props.location.lng}&key=${Env.googleApiKey}`;
      
    }
    console.log(imageUrl);
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
    <View style={{ ...styles.mapPreview, ...props.style }}>
      {props.location ? (
        <Image style={styles.mapImage} source={{ uri: imageUrl }} />
      ) : (
        props.children
      )}
    </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapImage: {
    width: '100%',
    height: '100%'
  }
});

export default MapPreview;