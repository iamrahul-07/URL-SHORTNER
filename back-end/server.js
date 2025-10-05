import express from 'express';
import { userRoutes } from './src/api/v1/routes/user-routes.js';
import { error404 } from './src/utils/middlewares/404.js';
import { connectToDB } from './src/utils/db/connection.js';
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import { shortRoute } from './src/api/v1/routes/url-short-routes.js';

const app=express();
app.use(cors());
app.use(express.json());
app.use('/', userRoutes);
app.use('/', shortRoute);
//app.use(middleware)
//404 middleware
app.use(error404);
const promise=connectToDB();
promise.then(result=>{
    console.log("Database connection created");
    const server=app.listen(1234, err=>{
    if(err){
        console.log("Server crash",err);
    }else{
        console.log("Server up and running",server.address().port);
    }
})
}).catch(err=>{
    console.log("DB connection fails", err);
})
