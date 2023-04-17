import {createStore} from 'redux';
import rootReducer from '../Reducers';



const Store = createStore( 
    rootReducer, /* preloadedState, */  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default Store;