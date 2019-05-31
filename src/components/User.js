import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class User extends Component {
  render() {
    const { name, email, ip } = this.props.user;
    return (
      <div className="list-item">
        <span>
          {name}
        </span>
        <span>
          {email}
        </span>
        <span>
          {ip}
        </span>
        <span
          onClick={this.props.deleteUser.bind(this, this.props.user.id)}
        >&times;</span>
      </div>
    )
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired
}

export default User
