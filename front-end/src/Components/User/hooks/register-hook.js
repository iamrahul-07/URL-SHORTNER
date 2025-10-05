import {useForm} from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod";
import {registerSchema} from "../validation/Register-schema"
import { email } from 'zod';
import {registerApiCall} from '../../User/api/user-api.js'
import { useNavigate } from 'react-router-dom';
const useRegister=()=>{
    const navigate=useNavigate();
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver : zodResolver(registerSchema),
        defaultValues : {
            email:'sample@example.com',
            password :'',
            name:''
        }
    });
    const doSubmit=async (formData)=>{
        console.log("Register form Submit",formData);
        try{
        const response=await registerApiCall(formData);
        console.log('response is',response);
        if(response.data.id){
            alert("register successFully");
            navigate('/login');
        }else{
            alert("Register fail");
        }
    }catch(err){
        alert("Register Fails...");
        console.log("Error : ",err);
    }
}
    return {doSubmit, register, handleSubmit, errors};
}
export default useRegister;