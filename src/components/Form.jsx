import React, { Component } from 'react';
import Joi from 'joi-browser'


class Form extends Component {
    state = { 
        data:{},
        errors:{}
     }
     schema = {
        username: Joi.string().required().label("UserName").min(3),
        password: Joi.string().required().label("PassWord"),
      };
    
      validate = () => {
        const result = Joi.validate(this.state.data, this.schema, {
          abortEarly: false,
        });
        console.log(result);
    
        if (!result.error) return null;
    
        const errors = {};
        for (let item of result.error.details) errors[item.path[0]] = item.message;
        return errors;
      };
      validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const result = Joi.validate(obj, schema);
        return result.error ? result.error.details[0].message : null;
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
    
        const errors = this.validate();
        console.log(errors);
        this.setState({ errors: errors || {} });
        if (errors) return;

      };
    
      handleChange = ({ currentTarget: input }) => {
        console.log(input.value)
        const errors = { ...this.state.errors };
        // const errorMessage = this.validateProperty(input);
        // console.log( 'errormessege', errorMessage)
        // if (errorMessage) errors[input.name] = errorMessage;
        // else delete errors[input.name];
    
        const account = { ...this.state.data };
        account[input.name] = input.value;
    
        this.setState({ account, errors });
      };
      
    
    
}
 
export default Form;