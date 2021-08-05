import {combineReducers} from 'redux';
import Place from '../../model/Place';
import { ADD_PLACE, SET_PLACE } from "../action";

const initialState = {
    places :   []
}

const newPlace = (state = initialState,action)=>{
    switch(action.type){
        case SET_PLACE:
            return {
                places: action.payload.map(place => {
                      new Place(place.id.toString(), place.title, place.image);
                })
            }

        case ADD_PLACE:
            const Places = new Place(action.payload.id.toString(), action.payload.title,action.payload.image);
           return {
            places: state.places.concat(Places)
           }
        default:
        return state
    }
}

export default combineReducers({
    places : newPlace
});