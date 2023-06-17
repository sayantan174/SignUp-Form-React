import React, { useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    document.title = "Signup Form";
  });

  const validateForm = (event) => {
    event.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("Error: All the fields are mandatory");
      setStatus(false);
    } else if (password !== confirmPassword) {
      setError("Error: Password Mismatch");
      setStatus(false);
    } else {
      setError("");
      setStatus(true);
    }
  };

  return (
    <div className="form-container">
      <h1>Signup</h1>
      <form onSubmit={validateForm}>
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="cpassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <p className="error" style={{ visibility: !status ? "visible" : "hidden" }}> {error}</p>
        <p
          className="success"
          style={{ visibility: status ? "visible" : "hidden" }}
        >
          Successfully Signed Up
        </p>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Form;
