import { useNavigate } from "react-router-dom";


export default function Cart() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const navigate = useNavigate();

    const removeFromCart = (index) => {
      const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
      currentCart.splice(index, 1); // remove item at index
      localStorage.setItem("cart", JSON.stringify(currentCart));
      // navigate to home to reflect changes without forcing a full reload
      
    };
    
    const BuyNow = () => {
      alert("Thank you for your purchase!");
      localStorage.removeItem("cart");
      window.location.reload(); // refresh to update UI
      
    }
    
    return (
      <div >
  <h2 style={{ margin: 0 }}>Your Cart</h2>
  
  <button 
    onClick={() => {
      localStorage.removeItem("cart");
      setTimeout(() => navigate("/cart"), 1000);
      // navigate("/")
    }} 
    style={{ 
      padding: "10px 20px", 
      backgroundColor: "red", 
      color: "white", 
      border: "none", 
      borderRadius: "5px", 
      cursor: "pointer" 
    }}
  >
    Clear Cart
  </button>
        {cart.length === 0 && <p>No items in cart</p>}
  
        {cart.map((item, i) => (
          <div key={i} style={{ border: "1px solid black", margin: 10, padding: 10 }}>
            <h3>{item.title}</h3>
            <p>{item.brand}</p>
            <img src={item.image_url} width="120" />
            <br />
            <button onClick={() => removeFromCart(i)} style={{background:"red"}}>X</button>
            <button onClick={() => BuyNow()} style={{background:"yellow",color:"black"}} >Buy Now_🛒</button>
          </div>
        ))}
      </div>
    );
  }
  