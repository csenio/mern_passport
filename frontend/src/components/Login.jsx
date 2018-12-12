import React, { Component } from "react";
import Inputfield from "./Inputfield";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = (arg, type, action) => {
    this.setState({ [action + type]: arg });
    console.log(this.state);
  };

  register = () => {
    if (
      this.state.Registername &&
      this.state.Registeremail &&
      this.state.Registerpassword
    ) {
      console.log("sending register");
      //post action
      axios({
        method: "post",
        withCredentials: true,
        url: "http://localhost:4500/register",
        data: {
          ...this.state
        }
      });
    } else {
      console.log("please specify all the fields");
    }
  };

  login = () => {
    if (this.state.Loginname && this.state.Loginpassword) {
      console.log("sending login");
      //post action
      axios({
        method: "post",
        withCredentials: true,
        url: "http://localhost:4500/login",
        data: {
          ...this.state
        }
      });
    } else {
      console.log("please specify all the fields");
    }
  };

  render() {
    return (
      <div className="login">
        <div>
          <Inputfield type="name" action="Register" submit={this.submit} />
          <Inputfield type="email" action="Register" submit={this.submit} />
          <Inputfield type="password" action="Register" submit={this.submit} />
          <button onClick={this.register}>register</button>
        </div>
        <div>
          <Inputfield type="name" action="Login" submit={this.submit} />
          <Inputfield type="password" action="Login" submit={this.submit} />
          <button onClick={this.login}>login</button>
        </div>
      </div>
    );
  }
}

export default Login;
