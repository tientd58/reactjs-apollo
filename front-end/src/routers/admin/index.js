import React from 'react';
import {Route, Switch} from 'react-router-dom';

const RoutesAdmin = ({routes}) => (
  <>
     <Switch>
      {routes.map(route => (
        <Route {...route} key={route.path} />
      ))}
    </Switch>
  </>
)

export default RoutesAdmin;
