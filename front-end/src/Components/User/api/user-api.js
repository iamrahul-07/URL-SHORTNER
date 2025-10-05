import { apiClient } from "../../../Shared/services/api-client.js"

export const registerApiCall=async (formData)=>{
    try{
        const response =await apiClient.post('/register',formData);
        return response;
    }catch(err){
        console.log("Register Api call fail", err);
        throw err;
    }
}

export const loginApiCall=async (formData)=>{
    try{
        const response =await apiClient.post('/login',formData);
        return response;
    }catch(err){
        console.log("Login Api call fail", err);
        throw err;
    }
}