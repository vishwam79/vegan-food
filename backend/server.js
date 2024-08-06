import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

//config

const app = express();
const port =4000;

//middleware

app.use(express.json())
app.use(cors())

//DB connection 

connectDB();

// Api end points

app.use("/api/food", foodRouter);
app.use("/images", express.static('upload'))

app.get("/", (req, res)=>{
    res.send("Server is on");
})

app.listen(port, ()=>{

    console.log(`Server started on http://localhost:${port}`)
})