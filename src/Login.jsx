import React, { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <div className="auth-form-container">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email"
          />{" "}
          <br />
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Your password"
          />{" "}
          <br />
          <button className="enter" type="submit">Log In</button>
        </form>
        <button className="link-button" onClick={() => props.onFormSwitch("register")}>
          First time here, Register first!
        </button>
      </div>
    </>
  );
}

export default Login;
