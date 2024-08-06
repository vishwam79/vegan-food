import express from "express";
import cors from "cors";

//config

const app = express();
const port =4000;

//middleware

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    res.send("Server is on");
})

app.listen(port, ()=>{

    console.log(`Server started on http://localhost:${port}`)
})