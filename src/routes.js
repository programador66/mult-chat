import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../src/pages/Home';
import Room from '../src/pages/Room';

export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Home} />
            <Route path="room" component={Room} />
         </Switch>
      </BrowserRouter>
   )
}
