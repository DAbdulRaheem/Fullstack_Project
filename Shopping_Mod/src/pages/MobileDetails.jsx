import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './MobileDetails.css'
import axios from "axios";

export default function MobileDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(null);

  useEffect(() => {
    axios
      .get(`https://my-site-django-1.onrender.com/mobiles/${id}/`)
      .then((res) => setMobile(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(mobile);
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  if (!mobile) return <h3 className="loading">Loading...</h3>;

  return (
    <div className="detail-container">
      <div className="card">
        <img src={mobile.image_url} className="mobile-img" alt={mobile.title} />

        <div className="info">
          <h2>{mobile.title}</h2>
          <p className="brand">{mobile.brand}</p>

          <button className="cart-btn" onClick={addToCart}>
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
}
