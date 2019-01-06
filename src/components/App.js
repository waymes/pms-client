import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Home, Profile, Login, Signup
} from './routes';
import { GeneralLayout } from './layouts';

const App = () => (
  <GeneralLayout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </GeneralLayout>
);

export default App;
