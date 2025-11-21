import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const submit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", form.username);
    formData.append("password", form.password);

    axios.post("https://my-site-django-1.onrender.com/login/", formData)
      .then((res) => {
        toast.success("Login successful!");

        localStorage.setItem("user", res.data.username);

        setTimeout(() => navigate("/"), 1000);
      })
      .catch(() => toast.error("Invalid username or password"));
  };

//   const logout = () => {
//     localStorage.removeItem("user");
//     toast.info("Logged out");
//     navigate("/login");
//   };


  return (
    <>
      <ToastContainer />

      <form onSubmit={submit}
        style={{ maxWidth: "400px", margin: "auto", marginTop: "50px" , padding:"50px", border: "1px solid rgba(255, 255, 255, 0.5)", borderRadius: "16px",background: "rgba(255, 255, 255, 0.75",
          color: "#333",backdropFilter: "blur(10px)",  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)"}}
      >
        <h1>Login</h1>

        <h2>Username</h2>
        <input type="text"
          placeholder="Username"
          style={{ padding: "15px", marginBottom: "10px", width: "50%",  border: "1px solid gray", borderRadius: "5px" }}
          autoFocus
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        /><br />

        <h2>Password</h2>
        <input type="password"
          placeholder="Password"
          style={{ padding: "15px", marginBottom: "10px", width: "50%", borderRadius: "5px", border: "1px solid gray" }}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        /><br />

        <button type="submit" style={{ padding: "10px", borderRadius: "5px", border: "1px solid gray", backgroundColor: "black", color: "white" }}>Login</button>
        {/* <button type="submit" onClick={logout()} style={{ padding: "10px", borderRadius: "5px", border: "1px solid gray", backgroundColor: "black", color: "white" }}>Logout</button> */}
      </form>
    </>
  );
}
