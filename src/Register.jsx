import React, { useState } from "react";

function Register(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    
    <div className="auth-form-container">
      <h1>REGISTER FORM</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <input value={name} type="text" placeholder="Your name" /> <br />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" /> <br />
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Your password" />{" "}
        <br />
        <button className="enter" type="submit">Register</button>
      </form>
      <button className="link-button" onClick={() => props.onFormSwitch('login')}>Already have an account, Login Here!</button>
      </div>
    
  );
}

export default Register;
