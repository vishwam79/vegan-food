import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between items-center pt-4 pl-10 mx-auto pr-10 '>
        <img className='logo max-w-1/10 ' src={assets.logo} alt="" />
        
        <img className='profile-image w-10 ' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar