import React from "react";
import "../css/register.css";
import Nav from "./Nav";
import axios from "axios";
import Error from "./Error";
import Footer from "./Footer";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      errors: [],
      emailValid: false,
      passwordValid: false,
      usernameValid: false,
      formValid: false
    };

    this.register = this.register.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.validate = this.validate.bind(this);
  }
  validate() {
    let validEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    let email = this.state.email;

    if (!email.match(validEmail)) {
      let err = "Please enter a valid email";
      this.setState(prevState => ({
        errors: [...prevState.errors, err]
      }));
    } else {
      this.emailValid = true;
    }

    if (this.state.username.length < 3) {
      let err = "Username must be longer than 3 characters";
      console.log("error", err);

      this.setState(prevState => ({
        errors: [...prevState.errors, err]
      }));
    } else {
      this.usernameValid = true;
    }

    let validPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

    let password = this.state.password;

    if (!password.match(validPassword)) {
      let err = "Please enter a valid password: A password must be between 8 to 16 characters and have an Uppercase character, a Lowercase character and a number.";
      this.setState(prevState => ({
        errors: [...prevState.errors, err]
      }));
    } else {
      this.passwordValid = true;
    }

    if (this.passwordValid && this.emailValid && this.usernameValid) {
      return true;
    } else {
      return false;
    }
  }
  register() {
    this.setState(prevState => ({
      errors: []
    }));
    if (this.validate()) {
      axios
        .post("http://localhost:3000/api/user/register", this.state)
        .then(response => {
          if (response.data.success === false) {
            let err = response.data.message;
            console.log("error", response);

            this.setState(prevState => ({
              errors: [...prevState.errors, err]
            }));

            console.log(this.state.errors);
          }else{
              window.location.href = "/login"
          }
        })
        .catch(err => {
          console.log("error ", err);
        });
    }
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  componentDidMount() {}

  render() {
    const errors = this.state.errors.length;

    const allErrors = errors ? <Error errors={this.state.errors} /> : "";
    return (
      <div>
        <Nav />
        <div className="container-fluid">
          <div className="offset-md-3 col-md-6 register">
            <h4 className="text-center">Register</h4>
            {allErrors}
            <div className="input">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  required="required"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  required="required"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.register}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Register;
