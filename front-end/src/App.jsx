import { useState } from 'react'
import Register from './Components/User/pages/Register'
import Login from './Components/User/pages/Login'
import { Button } from '@radix-ui/themes'
import {AppRoutes} from './Shared/routes/AppRoutes'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate=useNavigate();
  return (
    <>
    <Button onClick={()=>{
      navigate('/register');
    }} variant='classic' type='button' mt="3" size="3">Register</Button>
    <Button onClick={()=>{
      navigate('/login');
    }} variant='soft' type='button' mt="3" ml="3" size="3">Login</Button>
    <Button onClick={()=>{
      navigate('/');
    }} variant='surface' type='button' mt="3" ml="3" size="3">Home</Button>
     {/* <Register/>
     <Login/> */}
     <AppRoutes/>
    </>
  )
}

export default App
