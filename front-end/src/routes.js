import {BrowserRouter, Switch, Route} from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;