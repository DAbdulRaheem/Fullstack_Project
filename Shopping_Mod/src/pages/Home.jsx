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

      {/* Container for the Grid */}
      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)", // Creates 5 columns
          gap: "20px", // Adds space between items
        }}
      >
        {mobiles.map((m) => (
          <div
            key={m.id}
            style={{
              padding: "10px",
              border: "1px solid black",
              borderRadius: "5px",
              display: "flex",           // Changed to flex for better internal alignment
              flexDirection: "column",   // Stacks content vertically
              justifyContent: "space-between", // Pushes button to bottom if needed
              alignItems: "center",      // Centers content horizontally
              textAlign: "center"
            }}
          >
            <div
              onClick={() => navigate(`/mobile/${m.id}`)}
              style={{ cursor: "pointer" }}
            >
              <h3>{m.title}</h3>
              <p>{m.brand}</p>
              <img src={m.image_url} width="120" alt={m.title} />
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
    </div>
  );
}