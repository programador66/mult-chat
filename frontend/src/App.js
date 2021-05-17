import React, {useEffect} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from '../src/routes';
import  './global.css';

import Socket from './services/socketio';

const App = () => {

  
  useEffect(() => {
      
    Socket.connect();
    
    return () => {
      Socket.desconnect()
   }

 },[])

  return (
    <div>
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  )
}

export default App;
