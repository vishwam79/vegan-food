import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Loginpopup.css'

const Login = ({setShowLogin}) => {

    const [currState, setCurrState]=useState("login")

  return (
    <div className="login-popup absolute z-1 w-full h-full bg-[#00000090] flex justify-center items-center">
        <form action="" className="login-popup-container self-center min-w-72 max-w-2xl min-h-[300px] text-[#808080] bg-white gap-5 pt-7 rounded-lg pl-5 pr-5">
            <div className="login-title ">
                <h2 className='text-2xl font-semibold mb-3'>{currState}</h2>
                <img className='bg-orange-500 rounded-full w-5 p-1 text-white  relative  -top-20 mr-2 -right-full' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popun-inputs flex flex-col">
                {
                    currState==="signup"
                    ?<input className='border-[3px] py-2 rounded-md pl-3 mr-10 mb-8' type="text" placeholder='Your Name' required />:<></>
                }
                
                <input className='border-[3px] py-2 rounded-md pl-3 mb-6 mr-10' type="email" placeholder='Your Email' required />
                <input className='border-[3px] py-2 rounded-md pl-3 mr-10 mb-8 ' type="password" placeholder='Password' required />
                <button className='bg-orange-500 border-[2px] items-center mx-auto px-8 py-2 rounded-lg text-white font-bold hover:bg-white hover:text-gray-700 hover:border-orange-400'>{currState==="signup"?"Create Account" :"login"}</button>
                <div className="login-popup-condition flex gap-2 mt-5">
                    <input className='' type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>

                    </div>

                    <div className='mt-2 mb-10'>

                    {
                        currState==="login"
                        ?
                        <p>Create a new account? <span className='cursor-pointer border-b-2 hover:text-orange-500' onClick={()=>setCurrState("signup")}>click here</span></p>
                        :
                        <p>Allready Have an Account <span className='cursor-pointer border-b-2 hover:text-orange-500' onClick={()=>setCurrState("login")}>Login Here</span></p>


                    }
</div>

                   
                    

            </div>
        </form>
    </div>
  )
}

export default Login