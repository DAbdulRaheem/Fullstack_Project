import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const submit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", form.username);
    formData.append("email", form.email);
    formData.append("password", form.password);

    axios.post("https://my-site-django-1.onrender.com/register/", formData)
      .then((res) => {
        toast.success(`User ${res.data.username} registered successfully!`);
        setTimeout(() => navigate("/login"), 1000);
      })
      .catch((err) => {
        toast.error("Registration failed");
      });
  };

  return (
    <>
      <ToastContainer />

      <form onSubmit={submit}
        style={{ maxWidth: "400px", margin: "auto", marginTop: "50px" , padding:"50px", border: "1px solid rgba(255, 255, 255, 0.5)", borderRadius: "16px",background: "rgba(255, 255, 255, 0.75",
          color: "#333",backdropFilter: "blur(10px)",  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)"}}
      >
        <h1>Register</h1>

        <h2>Username</h2>
        <input type="text"
          placeholder="Enter UserName"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          style={{ padding: "10px", marginBottom: "10px", width: "50%", borderRadius: "3px", border: "1px solid gray" }}
        /><br />

        <h2>Email</h2>
        <input type="email"
          placeholder="Enter your Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ padding: "10px", marginBottom: "10px", width: "50%", borderRadius: "3px", border: "1px solid gray" }}
        /><br />

        <h2>Password</h2>
        <input type="password"
          placeholder="Enter Your Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={{ padding: "10px", marginBottom: "10px", width: "50%", borderRadius: "3px", border: "1px solid gray" }}
        /><br />

        <button type="submit" style={{ padding: "10px", borderRadius: "5px", border: "1px solid gray", backgroundColor: "black", color: "white" }}>Register</button>
      </form>
    </>
  );
}
