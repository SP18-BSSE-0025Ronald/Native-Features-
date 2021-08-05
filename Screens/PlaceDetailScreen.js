import React from 'react';
import {View , Text, StyleSheet} from 'react-native';
//import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

const PlaceDetailScreen = ()=>{
  return (
      <View>
          <Text>PlaceDetailScreen</Text>
      </View>
  )
}

PlaceDetailScreen.navigationOptions = navData =>{
  return {
    headerTitle : navData.navigation.getParam('Title')
  }
}

const styles = StyleSheet.create({});

export default PlaceDetailScreen;