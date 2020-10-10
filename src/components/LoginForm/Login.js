import React, { Component } from 'react'
 import axios from 'axios';
import './LoginForm.css';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiContants';
import { withRouter } from "react-router-dom";
 class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          password: null,
          email:null,
          check:null,
          successMessage:null
        };
      }
    handleChange = (e,name) => {
        this.setState({
            [name]:e.target.value,
        });
    }
     redirectToRegister = () => {
         console.log("/register")
        this.props.history.push('/register'); 
    }
    redirectToHome = () => {
        this.props.history.push('/home');
    }
    handleSubmitClick = (e) => {
        console.log("aaa"+this.state.email+"bbb"+this.state.password);
        const payload={
            "email":this.state.email,
            "password":this.state.password,
        }
        axios.post(API_BASE_URL+'/login', payload)
            .then(function (response) {
                if(response.status === 200){
                 alert("Dang nhap thanh cong");
                    localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                    this.redirectToHome();
                }
                else if(response.code === 401){
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

      
      render(){
          return(
              
            <div className="card col-12 col-lg-4 login-card mt-2 hv-center ">
            <form>
                <div className="form-group text-left pt-5">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={this.state.email}
                       onChange={e => this.handleChange(e,"email")}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Password"
                       value={this.state.password}
                       onChange={e => this.handleChange(e,"password")} 
                />
                </div>
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={this.handleSubmitClick}
                >Submit</button>
            </form>
            <div className="alert alert-success mt-2" style={{display: this.state.successMessage ? 'block' : 'none' }} role="alert">
                {this.state.successMessage}
            </div>
            <div className="registerMessage">
                <span>Dont have an account? </span>
                <span className="loginText" onClick={() => this.redirectToRegister()}>Register</span> 
            </div>
        </div>
          )
      }

}
export default withRouter(Login);