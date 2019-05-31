import React, { Component } from 'react'
import List from './List'
import '../styles/List.css'

export class ListContainer extends Component {
  render() {
    return (
      <div>
        <div className="list-header">
          <span
            className='name'
            onClick={this.props.sortList}
          >Name</span>
          <span
            className='emali'
            onClick={this.props.sortList}
          >Email</span>
          <span
            className='ip'
            onClick={this.props.sortList}
          >Ip address</span>
          <span
            onClick={this.props.deleteList}
            style={{visibility: (this.props.users.length > 0)?('visible'):('hidden')}}
          >&times;</span>
        </div>
        <List 
          users={this.props.users}
          deleteUser={this.props.deleteUser}
        />
      </div>
    )
  }
}

export default ListContainer
