import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';

import Doll from '../../assets/dollor.png'
import axios from 'axios';



const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("OrderId");

    const navigate = useNavigate();

    const {url }=useContext(StoreContext);

    const verifyPayment = async()=>{
        const response = await axios.post(url+"/api/order/verify", {success, orderId})
if(response.data.success){
    navigate("/myorder")

}
else{
    navigate("/")
}
    }

    useEffect(()=>{
        verifyPayment();

    },[])

  return (
    
    <div className="flex items-center justify-center min-h-[60vh]">

        <div className=" items-center flex justify-center w-20 h-20 border-[5px] border-gray-500 border-t-orange-500 rounded-full animate-spin border-b-green-500 border-l-yellow-500 border-r-blue-600">

            <img className='h-10 w-10 bg-transparent rounded-full animate-none ' src={Doll} alt="" />
        </div>
       
    </div>
  )
}

export default Verify