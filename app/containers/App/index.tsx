/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import { routes } from '../../config/routes';
import HomePage from '../../containers/HomePage/Loadable';
import LoginPage from '../../containers/LoginPage/Loadable';

import GlobalStyle from '../../global-styles';
function App() {
  return (
    <div>
      <Switch>
        <Route exact component={HomePage} path='/' />
        <Route component={LoginPage} path='/login' />
        {/* {routes.map(route => {
          console.log(route.component);
          <Route component={route.component} path={route.path} />
        })} */}
      </Switch>
      <GlobalStyle />
    </div>
  );
}
export default hot(App);
