import { createAppContainer } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import PlacesListScreen from '../Screens/PlacesListScreen';
import PlaceDetailScreen from '../Screens/PlaceDetailScreen';
import NewPlaceScreen from '../Screens/NewPlaceScreen'
import MapScreen from '../Screens/MapScreen';
import Color from "../constant/Colors";

const Places = createStackNavigator({
     PlaceList: PlacesListScreen,
     PlaceDetail: PlaceDetailScreen,
     NewPlace : NewPlaceScreen,
     MapScreen :MapScreen,
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Color.primary
        },
        headerTintColor: "white"
    }

});

export default createAppContainer(Places);
