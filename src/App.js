import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Welcome from './Welcome';
import Signup from './Signup';
import Signin from './Signin';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={Header} />
                    <Switch>
                        <Route path="/" exact component={Welcome} />
                        <Route path="/signup" exact component={Signup} />
                        <Route path="/signin" exact component={Signin} />
                    </Switch>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;