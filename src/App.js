import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <h1>hola mundo</h1>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;