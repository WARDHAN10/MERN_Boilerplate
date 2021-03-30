import React, { Component } from 'react';
// import {render} from 'react-dom';
import "./App.css"

import axios from 'axios'
import {Link} from 'react-router'
class App extends Component{
  constructor(){
  super()
  this.state={
    firstName:"",
    Username:"",
    email:"",
    password:""
  }
  this.changeFullname = this.changeFullname.bind(this)
  this.changeUsername = this.changeUsername.bind(this)
  this.changeEmail = this.changeEmail.bind(this)
  this.changepwd = this.changepwd.bind(this)
  this.onSubmit=this.onSubmit.bind(this)
  }

  changeFullname(event){
    this.setState({
      firstName:event.target.value
    })
  }
  changeUsername(event){
    this.setState({
      Username:event.target.value
    })
  }
  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }
  changepwd(event){
    this.setState({
      password:event.target.value
    })
  }
 
onSubmit(event){

  event.preventDefault()
  const registered={
    firstName:this.state.firstName,
    Username:this.state.Username,
    email:this.state.email,
    password:this.state.password
  }
  console.log(registered)
axios.post('http://localhost:5000/post/signup',registered).then((response)=>{console.log(response.data)})

this.setState({
  firstName:"",
    Username:"",
    email:"",
    password:""
})
}

  
  render(){
  return (
    <div>
      <form onSubmit={this.onSubmit}>
  <div className="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />

    <label><b>First name</b></label>
    <input type="text" placeholder="Enter First name" onChange={this.changeFullname} value ={this.state.firstName} required />

    <label><b>Username</b></label>
    <input type="text" placeholder="Enter Username" onChange={this.changeUsername} value ={this.state.Username} required />
    
    <label><b>E-mail</b></label>
    <input type="text" placeholder="Enter E-mail" onChange={this.changeEmail} value ={this.state.email} required />

    <label><b>Password</b></label>
    <input type="password" placeholder="Enter Password" onChange={this.changepwd} value ={this.state.password } required />

    <p>By creating an account you agree to our Terms & Privacy </p>

    <div className="clearfix">
   

    <Link to="/" ><button type="button" className="cancelbtn" >Cancel</button></Link>
    <button type="submit" className="signupbtn" >Sign Up</button>
    </div>
  </div>
</form>

    </div>
        );
  }    
}
export default App;
