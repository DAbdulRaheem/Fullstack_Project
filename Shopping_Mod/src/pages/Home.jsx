import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import './Login'

export default function Home() {
  const [mobiles, setMobiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://my-site-django-1.onrender.com/mobiles/")
      .then((res) => setMobiles(res.data))
      .catch((err) => {
        console.log(err);
        toast.error("Failed to load mobiles");
      });
  }, []);

  // Add to Cart with Toastify
  const addToCart = (mobile) => {

    // check login
    const user = localStorage.getItem("user");
    if (!user) {
      toast.warn("You must login first!");
      navigate("/login");   // redirect to login page
      return;
    }

    // proceed if logged in
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(mobile);
    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success(`${mobile.title} added to cart`);
  };

  return (
    <div>
      <ToastContainer />   {/* Required for Toastify */}

      <h2>All Mobiles</h2>

      {mobiles.map((m) => (
        <div
          key={m.id}
          style={{
            padding: "10px",
            margin: "10px",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          <div
            onClick={() => navigate(`/mobile/${m.id}`)}
            style={{ cursor: "pointer" }}
          >
            <h3>{m.title}</h3>
            <p>{m.brand}</p>
            <img src={m.image_url} width="120" />
          </div>

          <button
            style={{ marginTop: "10px" }}
            onClick={() => addToCart(m)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
