import express from 'express';
import Auth from '../middleware/auth.js'
import { placeOrder } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post("/place", Auth, placeOrder)

export default orderRouter;