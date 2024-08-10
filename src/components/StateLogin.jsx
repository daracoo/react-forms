
import { useState } from "react";

export default function Login() {

  const [eneteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  const [didEdit, setDidEdit] = useState({
    email:false,
    password: false
  });

  function handleSubmit(event){
    event.preventDefault();
    console.log(eneteredValues)
    setEnteredValues({ //resetting values
      email: '',
      password: ''
    })
  }

  const emailIsInvalid = didEdit.email && !eneteredValues.email.includes('@')

  function handleInputChange(identifier, event){
    setEnteredValues(prevValues => ({
      ...prevValues, 
      [identifier]: event.target.value
    }))
    setDidEdit(prevEdit => ({ // if the error is shown and we start typing again the error removes
      ...prevEdit,
      [identifier]: false
    }))
  }

  function handleInputBlur(identifier){
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onBlur={() => handleInputBlur('email')}
          onChange={(event) => handleInputChange('email', event)} 
          value={eneteredValues.email}/>
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" 
          onChange={(event) => handleInputChange('password', event)} value={eneteredValues.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
