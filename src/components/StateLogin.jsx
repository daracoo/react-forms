
import { useState } from "react";

export default function Login() {

  const [eneteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  function handleSubmit(event){
    event.preventDefault();
    console.log(eneteredValues)
  }

  function handleInputChange(identifier, event){
    setEnteredValues(prevValues => ({
      ...prevValues, 
      [identifier]: event.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" 
          onChange={(event) => handleInputChange('email', event)} value={eneteredValues.email}/>
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
