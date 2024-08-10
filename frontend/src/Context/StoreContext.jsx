import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const url ="http://localhost:4000";
  const [token,setToken]= useState("");

  const [food_list, setFood_list ] =useState([]);

  const addToCart = async(itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if(!token){
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalamount = 0;
    for (const item in cartItems) 
      {
        if(cartItems[item]>0) 
        {
          let itemInfo = food_list.find((product) => product._id === item);
          totalamount += itemInfo.price * cartItems[item];

        }
      
    }

    return totalamount;
  };



  const fetchFoodList = async()=>{

    const response = await axios.get(url+"/api/food/list");
    setFood_list(response.data.data);
    console.log(data);

  }

useEffect(()=>{

  

  async function loadData() {
    await fetchFoodList()

    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      
    } 
    
  }

  loadData();



},[])



  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
