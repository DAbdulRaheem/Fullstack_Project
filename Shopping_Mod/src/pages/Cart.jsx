export default function Cart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const removeFromCart = (index) => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.splice(index, 1); // remove item at index
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location.reload(); // refresh to update UI
    };

    const BuyNow = () => {
      alert("Thank you for your purchase!");
      localStorage.removeItem("cart");
      window.location.reload(); // refresh to update UI
    }
  
    return (
<div style={{ display: "flex", justifyContent: "space-between", padding: "0 20px" }}>
  <h2 style={{ margin: 0 }}>Your Cart</h2>
  
  <button 
    onClick={() => {
      localStorage.removeItem("cart");
      window.location.reload();
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
            <button onClick={() => removeFromCart(i)}>X</button>
            <button onClick={() => BuyNow()}>Buy Now🛒</button>
          </div>
        ))}
      </div>
    );
  }
  