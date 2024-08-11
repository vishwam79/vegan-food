import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import Menuicon from '../../assets/menu_icon.png'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import { Navigate } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

  const[menu, setMenu]= useState("home");

  const [isOpen, setIsOpen]=useState(false);

  const {getTotalCartAmount, token, setToken} = useContext(StoreContext);



  const logOut = ()=>{
    localStorage.removeItem("token");
    setToken("");
    Navigate("/");

  }

  return (


    <>
    <div className='navbar pr-0 pt-5 flex gap-10 justify-evenly items-center  ' >
<Link to="/"><img src={assets.logo} alt="" className="logo w-[150px]" /></Link>

<ul className="navvar-menu flex list-none gap-5 text-[#49557e] font-[18px]">
    <li onClick={()=>setMenu("home")} className={menu==='home'? "active":""} >Home </li>
    <li onClick={()=>setMenu("menu")} className={menu === "menu"?"active": ""}> Menu</li>
    <li onClick={()=>setMenu("mobile-app")} className={menu=== "mobile-app" ? "active" :""}> Mobile-App</li>
    <li onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
</ul>




<div>
  
</div>

<div className="navbar-right flex items-center gap-4 ">
<img onClick={()=>setIsOpen(!isOpen)} className='w-7 cursor-pointer' src={Menuicon} alt="" />
    <img  src={assets.search_icon} alt="" />

    <div className="navbar-search-icon relative">
       <Link to="/cart"> <img src={assets.basket_icon} alt="" /></Link>
        <div className={getTotalCartAmount()===0 ?"":"dot absolute w-2 h-2 -top-2 -right-2 bg-red-500 rounded-full"}></div>
       
    </div>
    {
      !token ?<button onClick={()=>setShowLogin(true)} className='border-[1px] border-orange-600 px-2 py-1 rounded-lg hover:bg-orange-500 hover:text-white  '>signin</button>
      :
      <div className="navbar-profile">
        
        <img src={assets.profile_icon} alt="" />
        <ul className='navbar-profile-dropdown'>


          <Link to="/cart"> <li className='flex items-end gap-[10px] cursor-pointer hover:text-orange-600'>
            <img className='w-[20px]' src={assets.bag_icon} alt="" />Order
<hr />
          </li>
          </Link>
          <li onClick={logOut} className='flex items-end gap-[10px] cursor-pointer hover:text-orange-600'>
            <img  className='w-[20px]' src={assets.logout_icon} alt="" />Logout
          </li>

        </ul>

      </div>
    }
    

</div>

    </div>
    <div className="">

    </div>


{
  isOpen && (

    <div className="mobile-menu mt-4 pt-10 pb-10 rounded-lg text-left pl-5 h-max bg-orange-500">
  <div className="mobile-menu-list w-full text-gray-800 border-l-4 border-orange-100 gap-x-3 ">

    <ul className=''>
      <li className='mb-2 ml-3 hover:bg-orange-400  cursor-pointer hover:text-red-950 hover:border-b-2 hover:border-orange-400 hover:p-2 hover: text-white  capitalize '>Vegan Foods</li>
      <li className='mb-2 ml-3  cursor-pointer hover:text-red-700 hover:border-b-2 hover:border-orange-400 hover:p-2 hover: text-white  capitalize '>All Recipes</li>
      <li className='mb-2 ml-3  cursor-pointer hover:text-red-700 hover:border-b-2 hover:border-orange-400 hover:p-2 hover: text-white  capitalize '>Our Services</li>
      <li className='mb-2 ml-3  cursor-pointer hover:text-red-700 hover:border-b-2 hover:border-orange-400 hover:p-2 hover: text-white  capitalize '>Dieting Plans</li>
      <li className='mb-2 ml-3  cursor-pointer hover:text-red-700 hover:border-b-2 hover:border-orange-400 hover:p-2 hover: text-white  capitalize '>Blogs</li>
    </ul>

  </div>
</div>


           

             


  )
}

</>



  )
}

export default Navbar