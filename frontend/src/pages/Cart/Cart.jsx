import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart mt-[100px] ">
      <div className="cart-items">
        <div className="cart-items-title ">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <br />
        <hr />
        {food_list.map((item, index)=>{
          if(cartItems[item._id]>0)
          {
            return(
              <>
              <div className="cart-items-title cart-items-item flex justify-around items-center bg-orange-50 rounded-md">
                 <img className='w-[70px] rounded-md mb-3 mt-2 ' src={item.image} alt="" />
                 <p>{item.name}</p>
                 <p>${item.price}</p>
                 <p>{cartItems[item._id]}</p>
                 <p>${item.price*cartItems[item._id]}</p>
                 <p onClick={()=>removeFromCart(item._id)} className='text-red-500 border-orange-500 border  rounded-full px-2 cursor-pointer '>x</p>
              </div>
              <hr />
              </>
            )
          }
        })}
      </div>

<div className="cart-buttom mt-[80px] flex flex-col lg:flex-row md:flex-row justify-between gap-[20px]  ">
  <div className="cart-total flex-1 flex flex-col gap-[20px] mb-10 border-[1px] p-4 rounded-sm shadow-sm">
    <h2 className="font-semibold text-[17px]">Cart total</h2>
    <div>
      <div className="cart-totale-detail flex justify-between text-gray-500">
        <p className='text-[14px]'>Subtotal</p>
        <p>${getTotalCartAmount()}</p>
      </div>
      <hr className='mt-2 mb-2 '/>
      <div className="cart-totale-detail flex justify-between text-gray-500">
        <p className='text-[14px]' >Delivery Fee</p>
        <p>${getTotalCartAmount()===0?0:2}</p>
      </div>
      <hr className='mt-2 mb-2 '/>
      <div className="cart-totale-detail flex justify-between text-gray-500">
        <p className='text-[14px]' >Total</p>
        <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
      </div>
      <hr className='mt-2 mb-2 '/>
    </div>
    <div className='text-center'><button onClick={()=>navigate('/order')} className='text-orange-500 border-[2px] border-orange-600 py-2 px-4 hover:bg-orange-600 hover:text-white hover:font-semibold rounded-lg items-center w-3/4 text-center '>PROCEED TO CHECKOUT</button></div>

  </div>
  <div className="cart-promo-code">

    <p className='text-[15px] text-gray-500' >If you have a promocode enter here</p>
    <div className="cart-promocode-input flex flex-col items-center">
      <input className='py-2 w-full rounded-md pl-2 mb-4 mt-3 border-[2px] border-gray-400 ml-' type="text" placeholder='Promocode' />
      <button className='text-orange-500 border-[2px] border-orange-600 py-2 px-4 hover:bg-orange-600 hover:text-white hover:font-semibold rounded-lg items-center w-1/2'>Submit</button>
    </div>

  </div>




</div>

    </div>
  )
}

export default Cart