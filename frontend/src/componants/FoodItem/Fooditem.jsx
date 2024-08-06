import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Fooditem.css'
import { StoreContext } from '../../Context/StoreContext'

const Fooditem = ({id, name, price, description, image }) => {


    

    const {cartItems, setCartItems, addToCart, removeFromCart} = useContext(StoreContext);
    
    
const hello = {cartItems};

  return (
    <div className='food-item w-full m-auto  '>
        <div className="food-item-image-container relative ">
            <img className='add '  src={image} alt="" />
            {!cartItems[id] 
            ?<img className=" absolute bottom-4 w-9 right-2 cursor-pointer" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
                :
                <div className="food-item-counter flex justify-normal gap-4 mt-2 absolute bottom-4 right-2 bg-white rounded-3xl px-2 py-1 ">
                    <img className='w-7 h-7 cursor-pointer' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p className='font-semibold mt-1'>{cartItems[id]}</p>
                    
                    <img className='w-7 h-7 cursor-pointer' onClick={()=>addToCart(id)} src={assets.add_icon_green } alt="" />

                </div>
            }
        </div>
        <div className="food-item-info p-5">
            <div className="food-item-name-rating flex justify-between items-center mb-3">
                <p className='text-[20px] font-semibold'>{name}</p>
                <img className='w-18' src={assets.rating_starts} alt="" />
            </div>
            <p className='text-[#676767] text-[13px]'>{description}</p>
            <p className='text-orange-500 font-bold text-[22px] '>${price}</p>
           
        </div>
    </div>
  )
}

export default Fooditem