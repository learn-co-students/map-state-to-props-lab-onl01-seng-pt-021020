import React, { Component } from 'react';
import { connect } from 'react-redux'

// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((u) => (
            <li>{u.username}</li>
          ))}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
        <p>{this.props.users.length}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mSTP = (state) =>{ 
  return { users: state.users }
}

// connect this component to Redux
export default connect(mSTP)(Users);
