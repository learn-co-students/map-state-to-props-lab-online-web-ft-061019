import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          <p>{this.props.users.map(user => <li key={user.username}>{user.username}</li>)}</p>
          <p>{this.props.users.length}</p>
          
          
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users,
  userCount: state.users.length }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
