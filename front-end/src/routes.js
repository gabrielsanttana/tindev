import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/devs/:id' component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;