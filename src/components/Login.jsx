import React, { Component } from "react";

import Input from "./Input";


class LoginForm extends Component {
  state = {
    data: { username: "", password: "" },
    error_message: {},
  }

  doSubmite=()=>{
    console.log('submitted')
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = this.state.data
  };

  handleChange = ({ currentTarget: input }) => {
    console.log(input.value)
    console.log(input.name)

    let data = this.state.data
    data[input.name] = input.value

    this.setState({data: data})

    
  };


  
  render() {
    return (
      <div className="container">
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={this.state.data.username}
            name="username"
            onChange={this.handleChange}
            label="UserName"
            error={this.state.error_message}
            type="text"
          />
          <Input
            value={this.state.data.password}
            name="password"
            onChange={this.handleChange}
            label="PassWord"
            error={this.state.error_message}
            type="password"
          />
          <button  className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
// disabled={this.validate()}