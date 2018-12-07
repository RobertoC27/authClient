import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Welcome from './Welcome';
import MyForm from './MyForm';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={Header} />
                    <Route path="/" exact component={Welcome} />
                    <Route path="/signup" exact render={() => <MyForm title="Signup"/>} />

                </div>
            </BrowserRouter>
        );
    }
}

export default App;