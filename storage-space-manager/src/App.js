import React, { Component } from 'react';
import logo from './logo.svg';
import ExampleComponent from './components/ExampleComponent';
import axios from 'axios';
import variables from './config/variables';
import './App.scss';

class App extends Component {

	render() {
		return (
            <div className="app">
                <header className="app__header">
                    <img src={logo} className="app__logo" alt="logo" />
                    <h1 className="app__title">The Saatva Company - Storage Space Manager</h1>
                </header>
                <div>
                    <ExampleComponent />
                </div>
            </div>
		);
	}
}

export default App;
