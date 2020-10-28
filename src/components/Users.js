import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, key) => {
            return(
              <div key={key}>
                <li>
                  <h3>{user.username}</h3>
                  <h5>{user.hometown}</h5>
                </li>
              </div>
            )
          })}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users);
