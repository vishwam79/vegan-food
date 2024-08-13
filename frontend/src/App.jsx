import React, { useState } from "react";
import Navbar from "./componants/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Home from "./pages/Home/Home";
import Footer from "./componants/Footer/Footer";
import Login from './componants/LoginPopuo/Login';
import Verify from "./pages/verify/Verify";



const App = () => {


  const [showLogin, setShowLogin] = useState(false)


  return (
    <>
    {
      showLogin?<Login setShowLogin={setShowLogin} /> : <></>
    }
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path='/login' element={<Login />} /> */}

          <Route path="/verify" element={< Verify />}> </Route>

        </Routes>
       
      </div>
      <Footer />
     
    </>
  );
};

export default App;
