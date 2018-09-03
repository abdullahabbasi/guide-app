import React, { Component } from 'react';
import { getUsers } from '../actions'
import _ from 'lodash'
import { connect } from 'react-redux';


class Contact extends Component {

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="App">
        <ul>
          { _.map(this.props.users, (user) => {return <li key={user.id}>{user.name}</li>})}
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
