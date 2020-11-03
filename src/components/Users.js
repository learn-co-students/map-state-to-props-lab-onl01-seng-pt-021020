import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'
class Users extends Component {

  renderUsers = () => {
    this.props.users.map(user => {
      console.log(user.username)
      return (
      <div>{user.username} - {user.hometown}</div>
      )
    })
  }

  render() {
    return (
      <div>
        Users!
        <ul>
          { this.props.users.map((user, index) => {
            return (
              <li key={index}>{user.username} - {user.hometown}</li>
            )
          }) }
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
        <p>total users: {this.props.users.length}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
