import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <div className="sidebar-options">
          <img src={assets.add_icon} alt="" />
          <p>Add Item</p>
        </div>

        <div className="sidebar-options">
          <img src={assets.add_icon} alt="" />
          <p>Add List Item</p>
        </div>

        <div className="sidebar-options">
          <img src={assets.add_icon} alt="" />
          <p>Orders</p>
        </div>

        
      </div>
    </div>
  );
};

export default Sidebar;
