import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Login } from './routes';
import { GeneralLayout } from './layouts';

class App extends Component {
  render() {
    return (
      <GeneralLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </GeneralLayout>
    );
  }
}

export default App;
