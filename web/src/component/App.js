/**
 * Created by MAXIMILIANO.CABA on 16/02/2017.
 */

import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>React ES6 - Socket.io - NodeJS-server</h2>
                </div>
                <p className="App-intro">
                </p>
            </div>
        );
    }
}

export default App;
