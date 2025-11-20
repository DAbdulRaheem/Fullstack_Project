import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const submit = (e) => {
    e.preventDefault();

    axios.post("https://my-site-django-1.onrender.com/register/", form)
      .then(res => {
        alert(res.data.message);
        navigate("/login");  
      });
  };

  return (
    <form onSubmit={submit}>
      <h2>Register</h2>
      <h3>Register User Here</h3>

    <p>Username</p>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      /><br />

        <p>Email</p>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        /><br />

        <p>Password</p>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      /><br />
      <p></p>

      <button type="submit">Register</button>
    </form>
  );
}
