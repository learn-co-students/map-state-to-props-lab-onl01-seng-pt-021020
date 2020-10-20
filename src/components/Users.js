import React, {Component} from 'react';
import {connect} from 'react-redux';

class Users extends Component {
	render() {
		let users = this.props.users;
		return (
			<div>
				<ul>
					Users!
					{users.map((user, id) => {
						return <li key={id}>{user.username}</li>;
					})}
					{users.length > 0 ? <div>{users.length}</div> : null}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {users: state.users};
};

export default connect(mapStateToProps)(Users);
