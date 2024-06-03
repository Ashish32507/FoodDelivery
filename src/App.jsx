import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import PlaceOred from "./pages/PlaceOrder/PlaceOred";
import Footer from "./component/Footer/Footer";
import LoginPoup from "./component/LoginPopup/LoginPoup";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPoup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOred />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
