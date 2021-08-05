import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View , Text, StyleSheet, TextInput,Button} from 'react-native';
import { useDispatch } from 'react-redux';
import {addPlace}  from '../Store/action';
import ImgPicker from '../component/ImgPicker';
import LocationPicker from '../component/LocationPicker';

const NewPlaceScreen = (props)=>{
 const [titleValue , setTitleValue]= useState(' ');
 const [imageUse , setImageUse]= useState(' ');
 

 const dispatch = useDispatch();

  const onTextChange= (text)=>{
      setTitleValue(text)
  }

   const onImageSave = (imageURI)=>{
      setImageUse(imageURI);
   }

  const onSubmit = ()=>{
     dispatch(addPlace(titleValue,imageUse));
     props.navigation.goBack();
  }
  return (
      <View style={styles.form}>
          <Text style={styles.label}>Title</Text>
          <TextInput onChangeText={onTextChange} value={titleValue} style={styles.input}/> 
           <ImgPicker onSelectImage={onImageSave}/>
           <LocationPicker navigation={props.navigation}/>
          <Button title="Save Place" onPress={onSubmit} color="green"/>
      </View>
  )
}

const styles = StyleSheet.create({
    form:{
        margin: 20
    },
    label:{
        fontSize:20,
        fontWeight: "normal",
        marginBottom: 8,

    },
    input:{
        borderBottomColor: "black",
        borderBottomWidth: 2,
        marginBottom: 10,
        paddingHorizontal: 4,
        paddingVertical: 4
    }

});

export default NewPlaceScreen;