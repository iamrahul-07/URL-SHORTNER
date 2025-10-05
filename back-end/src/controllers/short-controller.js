import { request, response } from "express";
import { nanoid } from "nanoid";
import { addUrl, getSmallToBig } from "../services/url-service.js";

export const getBigURL=async (request, response)=>{
    const {code}=request.params;
    console.log('Code is', code);
    try{
    const doc=await getSmallToBig(code);
    if(doc && doc._id){
        response.redirect(doc.bigurl);
    }else{
        response.json({message: 'Invalid small URl'});
    }
}catch(err){
    console.log('Error is', err);
    response.json({message: 'Invalid small URl', err});
}
}

export const urlShort=async (request, response)=>{
    const bigUrl=request.body.bigurl;
    console.log('Big URl', bigUrl);
    try{
    const num=nanoid(6);
    const doc=await addUrl({email:'amit@yahoo.com', shortid:num, bigurl:bigUrl});
    if(doc && doc._id){
        response.json({shorturl:process.env.BASE_URL+'small/'+num});
    }else{
        response.json({error:'Something went Wrong'})
    }
    }
    catch(err){
        console.log('Error in short url', err);
        response.json({error:'Something went Wrong', err});
    }
}
