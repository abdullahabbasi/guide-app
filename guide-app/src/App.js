import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getUsers } from './contact/actions'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentDidMount() {
    getUsers();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  console.log('dispatch ',dispatch);
  console.log('bindActionCreators ', bindActionCreators);
  return bindActionCreators({  }, dispatch);
}

const connectComponent = connect(null, mapDispatchToProps);
export default connectComponent(App);
