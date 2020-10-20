import React, {Component} from 'react';
//import any needed imports
import {connect} from 'react-redux';
class Users extends Component {
	render() {
    let users = this.props.users
		return (
			<div>
				<ul>
					Users!
					{/* Write code here that displays the usernames of all users in the Redux store */}
          {users.map((user, id) =>{
           return <li key={id}>{user.username}</li>
          })}
					{/* In addition, display the total number of users currently in the store */}
          {users.length > 0 ? <div>{users.length}</div>:null}
          
				</ul>
			</div>
		);
	}
}

//add mapStateToProps here
const mapStateToProps = (state) => {
	return {users: state.users};
};
// connect this component to Redux
export default connect(mapStateToProps)(Users);
