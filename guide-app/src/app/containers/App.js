import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../styles/App.css';
import Contact from '../../contact/containers/Contact'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom'
import { Row, Col, Grid, Navbar, Nav, NavItem} from 'react-bootstrap'


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <img src={logo} className="App-logo" alt="logo" />
              </Navbar.Brand>
            </Navbar.Header>
            <Navbar>
              <Nav pullRight>
                <NavItem eventKey={1} href="/form">
                  Form
                </NavItem>
                <NavItem eventKey={2} href="/contact">
                Contact
                </NavItem>
              </Nav>
            </Navbar>
          </Navbar>
        </header>
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
