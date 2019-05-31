import React, { Component } from 'react'
import '../styles/Modal.css'

export class Modal extends Component {
  render() {
    return (
      <div 
        className='modal'
        style={{display: (this.props.modal.showModal)?('block'):('none')}}
      >
        <div className="modal-content">
          <div className="modal-header">
            <span 
              className="close"
              onClick={this.props.closeModal.bind(this, false, this.props.modal.delId)}
            >&times;</span>
            <h1>{this.props.modal.confirm!==null?"Confirm!":"Cannot add user!"}</h1>
          </div>
          <div 
            className="modal-body"
            style={{display: (this.props.modal.confirm===null)?('block'):('none') }}
          >
            <p
              style={{
                textAlign:'center',
                padding:'1rem'
              }}
            >            
              <span className='important'>
                {this.props.modal.modalMsg}
              </span>
            </p>
          </div>
          <div 
            className="modal-body"
            style={{display: (this.props.modal.confirm!==null)?('block'):('none')}}
          >
            <p style={{textAlign:'center'}}>
              Are you sure you want to remove
              {this.props.modal.delId!=null?" user: ":" "}
              <span className='important'>
                {this.props.modal.modalMsg}
              </span>
              ?
            </p>
            <div style={{display:'flex'}}>
              <button
                className='btn-pos'
                style={{flex:'2'}}
                onClick={this.props.closeModal.bind(this, true, this.props.modal.delId)}
              >YES</button>
              <button
                className='btn-neg'
                style={{flex:'2'}}
                onClick={this.props.closeModal.bind(this, false, this.props.modal.delId)}
              >No</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
