import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import './Login'; 
import './Home.css'; // Import the new CSS file here

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
      navigate("/login"); 
      return;
    }

    // proceed if logged in
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(mobile);
    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success(`${mobile.title} added to cart`);
  };

  return (
    <div className="home-container">
      <ToastContainer />

      <h2 className="page-title">All Mobiles</h2>

      <div className="mobile-grid">
        {mobiles.map((m) => (
          <div key={m.id} className="mobile-card">
            
            <div
              className="card-content"
              onClick={() => navigate(`/mobile/${m.id}`)}
            >
              <h3>{m.title}</h3>
              <p>{m.brand}</p>
              <img 
                src={m.image_url} 
                alt={m.title} 
                className="product-image"
                width="120px" 
                height="150px" 
              />
            </div>

            <button
              className="add-btn"
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