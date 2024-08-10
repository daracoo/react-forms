
import { useState } from "react";
import Input from "./Input";

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
    // setEnteredValues({ //resetting values
    //   email: '',
    //   password: ''
    // })
  }

  const emailIsInvalid = didEdit.email && !eneteredValues.email.includes('@')
  const passwordIsInvalid = didEdit.password && eneteredValues.password.trim().length < 6;
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
        <Input label="Email" id="email" type="email" name="email" 
        onBlur={() => handleInputBlur('email')}
        onChange={(event) => handleInputChange('email', event)} 
        value={eneteredValues.email}
        error={emailIsInvalid && 'Please enter a valid email'}/>

        <Input label="Password" id="password" type="password" name="password" 
        onBlur={() => handleInputBlur('password')}
        onChange={(event) => handleInputChange('password', event)} 
        value={eneteredValues.password}
        error={passwordIsInvalid && 'Please enter a valid password'}/>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
