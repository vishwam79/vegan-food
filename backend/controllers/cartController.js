import userModel from "../models/userModel.js";

// add to cart

const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId );
    let cartData = await userData.cartData;

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, {cartData});
    res.json({ success:true,messege:"Added to Cart"});
  } catch (error) {
    console.log(Error);
    res.json({ success: false, messege: "Error" });
  }
};

// remove from cart

const removeFromCart = async (req, res) => {

    try {

        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId]>0) {
            cartData[req.body.itemId] -=1;
            
        }
         await userModel.findByIdAndUpdate(req.body.userId, {cartData});
         res.json({success:true, messege:"Removed from cart"})
        
    } catch (error) {
        console.log(error)
        req.json({success:false, messege:"Error"})
    }
    
};

// fetch user cart data

const getCart = async (req, res) => {


    try {

        let userData = await userModel.findById(req.body.itemId);
        let cartData = await userData.cartData;
        res.json({success:true, cartData});
        
    } catch (error) {

        console.log(Error)
        req.json({success:true, messege:"Error"})
        
    }
};

export { addToCart, removeFromCart, getCart };
