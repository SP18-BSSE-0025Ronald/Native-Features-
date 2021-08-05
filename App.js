import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import PlaceNavigation from './Navigation/PlaceNavigation';
import reducer  from './Store/reducer';
import ReduxThunk from 'redux-thunk';
import {init} from './helper/db';


init().then(()=>{
   console.log("DataBase Created Successfully");
}).catch((err)=>{
   console.log("DataBase failed");
   throw err;
})

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
    <PlaceNavigation/>
    </Provider>
  );
}
