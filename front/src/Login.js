import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './Login.css'
import axios from 'axios'
//import App from './App'
//import {browserHistory,Route,Router,Link} from 'react-router'
//import Test1 from './Test1';
import Test2 from './Test2';
class Login extends Component{

    constructor(){
        super()
        this.state={
            email:"",
            password:""
        }
        this.onsubmit=this.onsubmit.bind(this)
        this.changeEmail=this.changeEmail.bind(this)
        this.changePassword=this.changePassword.bind(this)

    }

    onsubmit(event){
        event.preventDefault()
        const loginRegistered={
           email:this.state.email,
          password:this.state.password
        }
        console.log(loginRegistered)
        
      axios.post('http://localhost:5000/post/login',loginRegistered)
            .then((response)=>{
                console.log(response.data)
                console.log("this function is working")
                
            })
            
      
      this.setState({
          email:"",
          password:""
      })
      return (                window.location="Thanks"
      )
      }

    
    changeEmail(event){
        this.setState({
            email:event.target.value
          })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
          })
    }

render(){
    return(
        <div className="login-form">
        <form onSubmit={this.onsubmit} method="post">
            <h2 className="text-center">Log in</h2>       
            <div className="form-group">
                <input type="text" className="form-control" onChange={this.changeEmail}  value ={this.state.email} placeholder="Username" required="required" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" onChange={this.changePassword} value ={this.state.password} placeholder="Password" required="required" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block" >Log in</button>
            </div>
            <div className="clearfix">
                <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                <br />
                <a href="/signup" className="pull-right">Forgot Password?</a>
            </div>        
        </form>
        <p className="text-center">
        <a href="/signup" className="pull-center">Create a account</a>
        </p>
    </div>
        )

        }
}

export default Login