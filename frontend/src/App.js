import React from 'react';
import { Provider } from 'react-redux';
import Routes from '../src/routes';
import  './global.css';

import store from './store';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  )
}

export default App;
