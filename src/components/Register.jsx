import React, { Component } from "react";

import RegisterInput from './RegisterInput';


class Register extends Component {
  state = {
    account: {
      username: "",
      password: "",
      name: "",
    },
    errors:{}
  };
  validate=()=>{
    const errors = {}
    if(this.state.account.username.trim() === '')
    errors.username = "UserName is required"
        if(this.state.account.password.trim() === '')
    errors.password = "PassWord is required"
        if(this.state.account.name.trim() === '')
    errors.name = "Name is required"
    return Object.keys(errors).length === 0 ? null : errors
    
}
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate()
    console.log(errors)
    this.setState({errors:errors || {}})
    if(errors) return

    console.log("submitted");
  };
  validateProperty=(input)=>{
      if(input.name === 'username'){
        if(input.value.trim() === '') return 'UserName is required'
      }
      if(input.name === 'password'){
        if(input.value.trim() === '') return 'password is required'
      }
      if(input.name === 'name'){
        if(input.value.trim() === '') return 'name is required'
      }
  }
  handleChange = ({currentTarget:input}) => {

    let errors = {...this.state.errors}
    let errorMessage = this.validateProperty(input)
    if(errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name]


    let account = { ...this.state.account };
     account[input.name] = input.value
    this.setState({account,errors})
  };
  
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <RegisterInput
            value={this.state.account.username}
            error={this.state.errors.username}
            label="UserName"
            name="username"
            onChange={this.handleChange}
            type="text"
          />

        <RegisterInput
            value={this.state.account.password}
            error={this.state.errors.password}
            label="PassWord"
            name="password"
            onChange={this.handleChange}
            type="password"
          />
          <RegisterInput
            value={this.state.account.name}
            error={this.state.errors.name}
            label="Name"
            name="name"
            onChange={this.handleChange}
            type="email"
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Register;
