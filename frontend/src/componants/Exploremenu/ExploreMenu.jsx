import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'


const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='exploremenu flex flex-col gap-5 ' id='explore-menu'>

        <h1 className='text-2xl font-semibold text-gray-900'>Explore Our Menu</h1>
        <p className='explore-menu-text max-w-[70%]'>Choose the diffrent types of food item  from the menu bar and some suggetion for the best types of menu item that most like by the our daily customers</p>

        <div className="explore-menu-list flex justify-between items-center gap-7 overflow-x-auto mt-5 text-center ">
            {
                menu_list.map((item, index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p className='mt-3 text-[#747474] cursor-pointer text-[16px] '>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr className='mt-4 border-none mb-2 h-[2px] bg-[#eeeded]' />

    </div>
  )
}

export default ExploreMenu