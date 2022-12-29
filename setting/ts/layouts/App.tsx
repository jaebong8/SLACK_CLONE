import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import loadable from '@loadable/component';

const Login = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path={'/login'} component={Login} />
      <Route path={'/signup'} component={SignUp} />
    </Switch>
  );
};

export default App;
