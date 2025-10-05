import {useForm} from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod";
import { email } from 'zod';
import {loginApiCall, registerApiCall} from '../../User/api/user-api.js'
import { loginSchema } from '../validation/Login-schema.js';
import { useNavigate } from 'react-router-dom';
const useLogin=()=>{
    const navigate=useNavigate();
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver : zodResolver(loginSchema),
        defaultValues : {
            email:'sample@example.com',
            password :'',
        }
    });
    const doSubmit=async (formData)=>{
        console.log("Login form Submit",formData);
        try{
        const response=await loginApiCall(formData);
        console.log('response is',response);
        if(response.data.id){
            localStorage.email=response.data.email;
            alert("Login successFully");
            navigate('/dashboard');
        }else{
            alert("Login fail");
        }
    }catch(err){
        alert("Login Fails...");
        console.log("Error : ",err);
    }
}
    return {doSubmit, register, handleSubmit, errors};
}
export default useLogin;