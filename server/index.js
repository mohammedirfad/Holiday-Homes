import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import cors from "cors";
import morgan from "morgan";
import mongoose from 'mongoose';
import DBconnect from './config/DbConnection.js';
import AuthRoute from './routes/auth.js';




const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use(morgan("tiny"));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())


app.use("/", AuthRoute);

DBconnect();
mongoose.connection.on("disconnected", () =>{
    console.log("mongo disconnected!")
})




app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}`);
})