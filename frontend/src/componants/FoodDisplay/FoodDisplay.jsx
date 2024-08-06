import React, { useContext } from 'react'

import { StoreContext } from '../../Context/StoreContext'
import Fooditem from '../FoodItem/Fooditem'

const FoodDisplay = ({category}) => {

const {food_list} = useContext(StoreContext)

  return (
    <div className="food-display mt-8">
        <h2 className='font-bold text-[24px] text-gray-900 mb-4'>Top Dishes Near You</h2>
        <div className="food-display-list grid sm:grid grid-cols-2 md:grid-col-3 lg:grid lg:grid-cols-4 gap-y-12 gap-x-2   ">
            

                {food_list.map((item,index)=>{

                  if(category==="All" || category===item.category){
                    return <Fooditem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price} />

                  }


                    
                })}

                
            
        </div>
    </div>
  )
}

export default FoodDisplay