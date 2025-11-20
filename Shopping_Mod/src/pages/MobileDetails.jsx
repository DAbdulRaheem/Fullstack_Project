import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MobileDetail() {
  const { id } = useParams();     // dynamic route parameter
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(null);

  useEffect(() => {
    axios.get(`https://my-site-django-1.onrender.com/mobile/${id}/`)
      .then(res => setMobile(res.data));
  }, [id]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(mobile);
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");          // redirect using useNavigate
  };

  if (!mobile) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>{mobile.title}</h2>
      <p>Brand: {mobile.brand}</p>
      <img src={mobile.image_url} width="200" />

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
