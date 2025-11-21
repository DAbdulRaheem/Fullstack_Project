import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import MobileDetail from "./pages/MobileDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile/:id" element={<MobileDetail />} />  {/* dynamic routing */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart/" element={<Cart />} />
        <Route path="*" element={<><h2 style={{ textAlign: "center", marginTop: "50px" }}>404 Not Found</h2><img src="public/Gemini_Generated_Image_6pbpmd6pbpmd6pbp.jpeg" alt="404 Not Found" style={{ maxWidth: "50%", height: "auto" }} /></>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
