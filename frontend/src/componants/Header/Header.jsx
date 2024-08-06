import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header ">

<div className="header-contant absolute flex flex-col gap-4  max-w-[50%] m-4 text-start items-start lg:top-2/4 sm:top-0 ">

<h2 className='font-bold lg:text-5xl sm:text-3xl text-2xl text-white '>Order Your Vegan food here </h2>
<p className='font-normal text-s text-white '>best suggestion for the vegan community only the best vegan food delovey site that is the easy to order food. </p>
<button className='bg-[#747474] py-2 px-3 text-white rounded-3xl hover:bg-white hover:text-orange-400 hover:border hover:border-gray-500 '>View more</button>
</div>
      
      
      
       </div>
  )
}

export default Header