import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import './PlaceOrder.css';
import axios from 'axios';


const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,url,cartItems}=useContext(StoreContext);

  const [data, setData] =useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipCode:"",
    country:"",
    phone:""
  })


  const onchangehandler =(event)=>{
    const name = event.target.name;
    const value = event.target.value;

    setData(data=>({...data,[name]:value}))
  }

  const placeOrder =async(event)=>{

    event.preventDefault();

    let orderItems =[];
    food_list.map((item)=>{
      if (cartItems[item._id]>0) {
        let itemInfo =item;
        itemInfo["quantity"]=cartItems[item._id];
        orderItems.push(itemInfo)
        
      }
    })

    let orderData ={
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,


    }
    let response = await axios.post(url+"/api/order/place", orderData, {headers:{token}});
    if(response.data.success){
      const {session_url}=response.data;
      window.location.replace(session_url);

    }
    else{
      alert("Error");
    }

  }

 

  return (
   <form onSubmit={placeOrder} className="place-order flex-col lg:flex-row md:flex items-center justify-center gap-[50px] mt-[100px] ">
    <div className="place-order-left  ">
      <p className="title font-bold text-2xl mb-[50px] text-gray-700">
        Delivery Information
      </p>
      <div className="multi-field">
        <input required='true' type="text" name='firstName' onChange={onchangehandler} value={data.firstName} placeholder='First Name' />
        <input required='true' type="text" name='lastName' onChange={onchangehandler} value={data.lastName}  placeholder='Last Name' />
      </div>

      <input required='true' type="email" name='email' onChange={onchangehandler} value={data.email} placeholder='Email address' />
      <input required='true' type="text" name='street' onChange={onchangehandler} value={data.street} placeholder='Street' />
      <div className="multi-field">
        <input required='true' type="text" name='city' onChange={onchangehandler} value={data.city} placeholder='City ' />
        <input required='true' type="text" name='state' onChange={onchangehandler} value={data.state} placeholder='State' />
      </div>

      <div className="multi-fi">
        <input required='true' type="text" name='zipCode' onChange={onchangehandler} value={data.zipCode} placeholder='Zipcode' />
        <input required='true' type="text" name='country' onChange={onchangehandler} value={data.country} placeholder='Country' />
      </div>
      <input required='true' type="text" name='phone' onChange={onchangehandler} value={data.phone} placeholder='Phone NO.' />

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
    <div className='text-center'><button type='submit' className='text-orange-500 font-semibold border-[2px] border-orange-600 py-2 px-4 hover:bg-orange-600 hover:text-white hover:font-semibold rounded-lg items-center  text-center '>Proceed To Payment</button></div>

  </div>

    </div>
   </form>
  )
}

export default PlaceOrder