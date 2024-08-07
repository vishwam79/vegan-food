import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

import { Routes, Route } from "react-router-dom";
import Order from "./pages/Orders/Order";
import List from "./pages/List/List";
import Add from "./pages/Add/Add";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <div>
        <ToastContainer /> 
          <Navbar />
          <hr />
          <div className="app-content">
            <Sidebar />

            <Routes>
              <Route path="/add" element={<Add />}></Route>
              <Route path="/list" element={<List />}></Route>
              <Route path="/order" element={<Order />}></Route>
            </Routes>
          </div>
        
      </div>
    </>
  );
};

export default App;
