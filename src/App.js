import React, { Component } from 'react'
import Header from './components/Header';
import Form from './components/Form';
import ListContainer from './components/ListContainer'
import Modal from './components/Modal'
import './App.css';

export default class App extends Component {
  state = {
    modal:{
      showModal:false,
      modalMsg:'',
      confirm:false,
      delId:null
    },
    users:[
      {
        id:Math.random().toString(36).substr(2, 16),
        name:"cat",
        email:"cat@mail.pl",
        ip:"123.12.32.3"
      },
      {
        id:Math.random().toString(36).substr(2, 16),
        name:"dog",
        email:"dog@mail.pl",
        ip:"11.1.2.3"
      },
      {
        id:Math.random().toString(36).substr(2, 16),
        name:"bat",
        email:"bat@mail.pl",
        ip:"10.11.12.13"
      }
    ]
  }

  deleteUser = (id)=> {
    this.setState({modal:{
      showModal:true,
      modalMsg:this.state.users.find(user=> user.id===id).name,
      delId:id
    }});
    
  }

  deleteList = ()=> {
    this.setState({modal:{
      showModal:true,
      modalMsg:'whole list',
      delId:null
    }});
    
  }

  closeModal = (confirm, id)=>{
    if (confirm && this.state.modal.delId!=null) {
      this.setState({users:[...this.state.users.filter(user=> user.id!==id)]});
    }else if(confirm && this.state.modal.delId===null){
      this.setState({users:[]});
    }

    this.setState({modal:{
      showModal:false,
      modalMsg:'',
      confirm:false,
      delId:null
    }});

  }

  addUser = (name, email, ip)=>{
    if (this.state.users.filter(user=> user.name===name).length>0 || this.state.users.filter(user=> user.email===email).length>0) {
      this.setState({modal:{
        showModal:true,
        modalMsg:'User with the same Nickname or Email already exists!',
        confirm:null,
        delId:null
      }});
    }else{
    const newUser = {
      id: Math.random().toString(36).substr(2, 16),
        name,
        email,
        ip
    }
    this.setState({users:[...this.state.users, newUser]});
    }
  }


  sortList = (e)=>{

    switch (e.target.className) {
      case 'name':
        this.setState({users:[...this.state.users.sort((a, b)=>{
          const A = a.name.toUpperCase();
          const B = b.name.toUpperCase();
  
            let comparison = 0;
            if (A > B) {
              comparison = 1;
            } else if (A < B) {
              comparison = -1;
            }
            return comparison;
          }
        )]});
        break;
      case 'emali':
        this.setState({users:[...this.state.users.sort((a, b)=>{
          const A = a.email.toUpperCase();
          const B = b.email.toUpperCase();

            let comparison = 0;
            if (A > B) {
              comparison = 1;
            } else if (A < B) {
              comparison = -1;
            }
            return comparison;
          }
        )]});
        break;
      case 'ip':
        this.setState({users:[...this.state.users.sort((a, b)=>{
          const A = a.ip.toUpperCase();
          const B = b.ip.toUpperCase();

            let comparison = 0;
            if (A > B) {
              comparison = 1;
            } else if (A < B) {
              comparison = -1;
            }
            return comparison;
          }
        )]});
        break;
    
      default:
        break;
    }
    //this.setState({users:[...this.state.users.filter(user=> user.id!==id)]});
  }

  render() {
    return (
    <div>
      <div className="App">
        <Header />
        <Form 
          addUser={this.addUser}
        />
        <ListContainer
          users={this.state.users}
          deleteUser={this.deleteUser}
          deleteList={this.deleteList}
          sortList={this.sortList}
        />
        <Modal 
          modal={this.state.modal}
          closeModal={this.closeModal}
        />
      </div>
    </div>
    )
  }
}
