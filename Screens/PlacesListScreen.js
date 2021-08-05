import React, {useEffect} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import HeaderButton from '../component/HeaderButton';
import PlaceItem from '../component/PlaceItem';
import {loadPlaces} from '../Store/action';



const PlacesListScreen = (props)=>{
   const dispatch = useDispatch();
   
     useEffect(()=>{
       dispatch(loadPlaces());
  },[dispatch]);


  const places = useSelector(state => state.places.places);
 // const values = Object.values(places);
  console.log(places);
  return (
    <View>
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <PlaceItem
          image={itemData.item.image}
          title={itemData.item.title}
          address={null}
          onSelect={() => {
            props.navigation.navigate('PlaceDetail', {
             Title: itemData.item.title,
            id: itemData.item.id
            });
          }}
        />
      )}
    />
    </View>
  );
};

PlacesListScreen.navigationOptions= navData =>{
    return {
        headerTitle: " All Places ",
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
          title="Add Place"
          iconName='md-add'
          onPress={() => {
              navData.navigation.navigate('NewPlace');
          }}
        />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({});

export default PlacesListScreen;