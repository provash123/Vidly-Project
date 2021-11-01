import React from 'react';

const RegisterInput = ({name,label,value,onChange,type,error}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
              id={name}
              value={value}
              onChange={onChange}
              name={name}
              type={type}
              className="form-control"
            />
            { error&&<div className="alert alert-danger">{error}</div>}
            </div>
     );
}
 
export default RegisterInput;