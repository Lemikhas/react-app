import React, { Component } from 'react'
import PopupBubble from './PopupBubble'
import '../styles/Form.css'

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const ipRegex = RegExp(
/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
);


export class Form extends Component {
  state = {
    nick:'',
    email:'',
    ip:'',
    formErrors:{
      nick:'e',
      email:'e',
      ip:'e'
    },
    formInvalid:true
  }
  formValidtionStyle = (name) => {return{
    borderColor:(name.length > 0)?(name.length > 1)?('#f55'):(''):('#5f5')
  }};

  onChange = (e)=> {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "nick":
        formErrors.nick =
          value.length < 1 ? "provide Nickname" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "ip":
        formErrors.ip = ipRegex.test(value)
          ? ""
          : "invalid ip address";
        break;
      default:
        break;
    }

    this.setState({formErrors, [name]:value});
    if(formErrors.nick === ''&&formErrors.email === ''&&formErrors.ip === ''){
      this.setState({formInvalid:false});
    }else{
      this.setState({formInvalid:true});
    }

  }

  onSubmit = (e)=>{
    e.preventDefault();
    this.props.addUser(
            this.state.nick,
            this.state.email,
            this.state.ip
    );
    this.setState({
      nick:'',
      email:'',
      ip:'',
      formErrors:{
        nick:'e',
        email:'e',
        ip:'e'
      },
      formInvalid:true
    });
  }
  log = ()=> console.log("abort");
  render() {
    return (
      <div className="Form">
      <form onSubmit={this.onSubmit}>
        <label>Nickname</label><br/>
        <input 
          type="text"
          name="nick"
          value = {this.state.nick}
          onChange = {this.onChange}
          noValidate
          style={this.formValidtionStyle(this.state.formErrors.nick)}
        />
        <PopupBubble errorMsg={this.state.formErrors.nick}/>
        <br />
        <label>Email</label><br/>
        <input 
          type="email"
          name="email"
          value = {this.state.email}
          onChange = {this.onChange}
          noValidate
          style={this.formValidtionStyle(this.state.formErrors.email)}
        />
        <PopupBubble errorMsg={this.state.formErrors.email}/>
        <br />
        <label>Ip adress</label><br/>
        <input
          type="ip"
          name="ip"
          value = {this.state.ip}
          onChange = {this.onChange}
          noValidate
          style={this.formValidtionStyle(this.state.formErrors.ip)}
        />
        <PopupBubble errorMsg={this.state.formErrors.ip}/>
        <br />
        <button 
          className='btn-pos'
          disabled={this.state.formInvalid}
        >Add user</button>
      </form>
    </div>
    )
  }
}

export default Form
