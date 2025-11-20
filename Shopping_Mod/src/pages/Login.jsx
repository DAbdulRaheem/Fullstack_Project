import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    axios.post("https://my-site-django-1.onrender.com/login/", form)
      .then(res => {
        toast.success("Login successful");
        navigate("/");    
      })
      .catch(err => {
        toast.error("Failed to load");
      });
  };

  return (
    <form onSubmit={submit} style={{ maxWidth: "400px", margin: "auto" , padding:"50px", border: "1px solid black", borderRadius: "5px" , marginTop: "50px"}}>
      <h2>Login</h2>

        <p>Username</p>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      /><br />
      <p>Password</p>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      /><br />
      <p></p>
      <button type="submit" style={{ padding: "10px 20px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "5px" }} >Login</button>
    </form>
  );
}
