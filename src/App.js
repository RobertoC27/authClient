import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Welcome from './Welcome';
import Signup from './Signup';
import Signin from './Signin';
import AuthProvider from './AuthProvider';
import ProtectedRoute from './ProtectedRoute';
import Feature from './Feature';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <AuthProvider>
            <Route path="/" component={Header} />
            <ProtectedRoute path="/feature" component={Feature} />
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/signin" exact component={Signin} />
            </Switch>
          </AuthProvider>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;