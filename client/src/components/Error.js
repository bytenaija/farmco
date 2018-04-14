import React from 'react';

const Error = props => {
    const errorMsg = props.errors.map((error, index) =>{
        return (

            <li className="errorLi" key="index">{error}</li>
        )
        
    });
    return (
    <div className = "error">
    {errorMsg}
    </div>
    );
  }

  export default Error;