import React, { Component } from 'react';
import { getUsers } from '../actions'

import { connect } from 'react-redux';


class Contact extends Component {

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="App">
        <ul>

        </ul>
      </div>
    );
  }
}

// _.map(this.props.users, (user, key) => {<li>{}</li>})
// function mapDispatchToProps(dispatch) {
//   console.log('dispatch ',dispatch);
//   console.log('bindActionCreators ', bindActionCreators);
//   return bindActionCreators({ getUsers }, dispatch);
// }
function mapStateToProps(state) {
    console.log(state);
    return { users: state.users } ;
}

export default connect(mapStateToProps, { getUsers })(Contact);
