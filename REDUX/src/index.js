import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import Store from './redux/Store';
import { Provider } from 'react-redux';
//Debugging
Store.subscribe (()=>{
     console.log(Store.getState())  
})
ReactDom.render(
   <Provider store = {Store}>
   <App/>
   </Provider>
  ,document.getElementById('root'))