import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar w-[18%] min-h-screen border-2 text-[1vw, 10px] ">
      <div className="sidebar-options pt-5 pl-[20%] flex flex-col gap-5">
        <NavLink to="/add" className="sidebar-option">
         
          <img className="" src={assets.add_icon} alt="" />
          <p className="">Add Items</p>
          
        </NavLink>

        <NavLink to="/list" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Add List Item</p>
        </NavLink>

        <NavLink to="/order" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>

        
      </div>
    </div>
  );
};

export default Sidebar;
