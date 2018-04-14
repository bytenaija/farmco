import React, { Component } from 'react';
import "../css/register.css"
import Nav from "./Nav";
import Footer from "./Footer";

class  Login extends Component {
    constructor(props) {
        super(props)
        this.state={
            username:'',
            password:''
        }
    }   
   
    render() {
    return (
        <div>
             <Nav  />
      <div className="container-fluid">
           <div className="offset-md-3 col-md-6 register">
                <h4 className="text-center">Login</h4>
            <div className="input">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
                
        </div>
        </div>
      </div>
      <Footer />
      </div>
    );
}
  }

  export default Login;