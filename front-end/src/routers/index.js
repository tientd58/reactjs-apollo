import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";

import RoutesPage from './page';
import RoutesAdmin from './admin';
// import LoginPage from 'containers/Auth/Login';
import routePageConfig from './page/RouteConfig';
import routeAdminConfig from './admin/RouteConfig';

class RouterContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path='/admin'>
              <RoutesAdmin routes={routeAdminConfig} />
            </Route>
            {/* <Route path="*" component={LoginPage} /> */}
            <Route path="/">
              <RoutesPage routes={routePageConfig} />
            </Route>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default RouterContainer;
