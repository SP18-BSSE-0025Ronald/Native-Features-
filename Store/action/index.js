import * as  FileSystem from 'expo-file-system';
export const ADD_PLACE = "ADD_PLACE";
export const SET_PLACE = "SET_PLACE";
import { insertPlace, fetchPlace } from '../../helper/db';

export const addPlace = (title, image)=>{
   return async (dispatch) =>{
    const filename = image.split('/').pop();
    const newPath = FileSystem.documentDirectory + filename;
    
     try{
         await FileSystem.moveAsync({
             from : image ,
             to : newPath
         });
         const dbResult = await insertPlace(
             title,
             newPath,
             "Dummy data",
             15.6,
             12.7
         );
         console.log(dbResult);
         dispatch({type: ADD_PLACE, payload:{
             id : dbResult.insertId,
             title: title,
             image: image
         }});
     }catch(err){
        console.log(err);
        throw err;
     
     }

   }


}


export const loadPlaces = ()=>{
    return  async (dispatch) =>{
          try{
            const fetechedPlaces = await fetchPlace();
            console.log(fetechedPlaces);
            dispatch({type: SET_PLACE , payload: fetechedPlaces.row._array })
          }catch(err){
              throw err;
          }
    }
}








