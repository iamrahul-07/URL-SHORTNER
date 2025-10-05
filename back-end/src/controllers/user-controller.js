import {LoginUser, registerUser}  from "../services/user-service.js";

export const home=(request, response)=>{
    response.send('<h1>URL Shortener Project</h1>')
}
export const login=async (request, response)=>{
    const userInfo=request.body;
    console.log("Received user info", userInfo);
    try{
        const doc=await LoginUser(userInfo);
        if(doc && doc._id){
        response.json({message:'Login SuccessFully ', id:doc._id, email:doc.email});
        }else{
            response.status(401).json({ error: 'Invalid credentials or user not found' });
        }
    }
    catch(err){
        console.log('Login Fails', err);
        response.status(400).json({error: 'Something went wrong during login',err:err})
        
    }
}

export const register=async (request, response)=>{
    const userInfo=request.body;
    console.log("Received user info", userInfo);
    try{
        const doc=await registerUser(userInfo);
        console.log("user Created : ",doc);
        response.json({message:'Register SuccessFully ', id:doc._id});
    }
    catch(err){
        console.log('Register Fail', err);
        response.status(400).json({error: 'Something went wrong during register',err:err})
        
    }
    // console.log("user info ", userInfo);
    // response.send('<h1> Register </h1>')
}