import React, { Component } from 'react'
import '../styles/PopupBubble.css'

export class PopupBubble extends Component {
  getStyle = () => {
    return {
      visibility: (this.props.errorMsg.length > 1) ? ('visible') : ('hidden')
    }
  }

  render() {
    return (
      <div className='popup'>
        <span className='popuptext' style={this.getStyle()}>
          {this.props.errorMsg}
        </span>
      </div>
    )
  }
}

export default PopupBubble
