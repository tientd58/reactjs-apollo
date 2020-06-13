import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

const RoutesPage = ({routes}) => (
  <>
     <Switch>
      {routes.map(route => (
        <Route {...route} key={route.path} />
      ))}
      <Route exact path="/" render={() => <Redirect to="/home" />} />
    </Switch>
  </>
)

export default RoutesPage;
