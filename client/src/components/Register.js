import React from 'react';
import "../css/register.css"
import Nav from "./Nav";
import axios from 'axios';

class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          user : {
                email: 'everistus',
                password : 'uyvyacysgauyscgacyagcysgaigcayiscgayicga'
          }
    };
    }

    componentDidMount(){
        
    }
    
    render() {
        return(
        <div>
             <Nav  />
      <div className="container-fluid">
           <div className="offset-md-3 col-md-6 register">
                <h4 className="text-center">Register</h4>
            <div className="input">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.user.email} placeholder="Enter email" 
                    onChange = {(event, newValue) => this.setState({ user : Object.assign({}, this.state.user , {email: newValue})})}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div> 
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.user.password} placeholder="Password"  onChange = {(event, newValue) => this.setState({ user : Object.assign({}, this.state.user , {password: newValue})})}
                    />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
                
        </div>
        </div>
      </div>
      </div>
    )
};
  }

  export default Register;