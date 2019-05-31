import React, { Component } from 'react'
import User from './User'
import PropTypes from 'prop-types'

export class List extends Component {
  render() {
    return this.props.users.map((user) => (
      <User
        key={user.id}
        user={user}
        deleteUser={this.props.deleteUser}
      />
    ));
  }
}

List.propTypes = {
  users: PropTypes.array.isRequired
}

export default List

