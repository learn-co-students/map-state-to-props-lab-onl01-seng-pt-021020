import React, { Component } from 'react';
import {connect} from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
      {this.props.users.length} Users!
          {this.props.users.map((user, i) => {
            return (
              <li key={i}>
                Usersname: {user.username}
                <br/>
                Hometown: {user.hometown}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users };
};
// connect this component to Redux
export default connect(mapStateToProps)(Users)
