import { Link } from "react-router-dom";

export default function MobileCard({ item }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 20, width: 200 }}>
      <h3>{item.name}</h3>
      <p>Price: {item.price}</p>
      <Link to={`/mobile/${item.id}`}>View Details</Link>
    </div>
  );
}
