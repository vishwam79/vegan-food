import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import './PlaceOrder.css';


const PlaceOrder = () => {

  const {getTotalCartAmount}=useContext(StoreContext);

  return (
   <form action="" className="place-order flex-col lg:flex-row md:flex items-center justify-center gap-[50px] mt-[100px] ">
    <div className="place-order-left  ">
      <p className="title font-bold text-2xl mb-[50px] text-gray-700">
        Delivery Information
      </p>
      <div className="multi-field">
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
      </div>

      <input type="email" placeholder='Email address' />
      <input type="text" placeholder='Street' />
      <div className="multi-field">
        <input type="text" placeholder='City ' />
        <input type="text" placeholder='State' />
      </div>

      <div className="multi-fi">
        <input type="text" placeholder='Zipcode' />
        <input type="text" placeholder='Country' />
      </div>
      <input type="text" placeholder='Phone NO.' />

    </div>
    <div className="place-order-right mt-[50px]">

    <div className="cart-total flex-1 flex flex-col gap-[20px] w-full min-w-80 mb-10 ">
    <h2 className="font-semibold text-[20px]">Cart total</h2>
    <div className=''>
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
    <div className='text-center'><button className='text-orange-500 font-semibold border-[2px] border-orange-600 py-2 px-4 hover:bg-orange-600 hover:text-white hover:font-semibold rounded-lg items-center  text-center '>Proceed To Payment</button></div>

  </div>

    </div>
   </form>
  )
}

export default PlaceOrder