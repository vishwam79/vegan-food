import express from 'express';
import Auth from '../middleware/auth.js'
import { placeOrder,verifyOrder } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post("/place",Auth,placeOrder)
orderRouter.post("/verify",verifyOrder)

export default orderRouter;