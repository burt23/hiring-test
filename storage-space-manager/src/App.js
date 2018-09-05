import React, { Component } from 'react';
import logo from './logo.svg';
import ExampleComponent from './components/ExampleComponent';
import axios from 'axios';
import variables from './config/variables';
import './App.css';

class App extends Component {

	render() {
		return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">The Saatva Company - Storage Space Manager</h1>
                </header>
                <div>
                    <ExampleComponent />
                </div>
            </div>
		);
	}
}

export default App;
