import {Route, Routes} from 'react-router-dom'
import Home from '../../Components/User/pages/Home'
import Register from '../../Components/User/pages/Register'
import Login from '../../Components/User/pages/Login'
import { Dashboard } from '../../Components/dashboard/Dashboard'
import { UrlShort } from '../../Components/urlShortener/pages/UrlShort'
import { AllUrls } from '../../Components/urlShortener/pages/AllUrls'
export const AppRoutes=()=>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
                <Route path='/dashboard' element={<Dashboard/>}>
                    <Route index element={<UrlShort/>} />
                    <Route path='shorten' element={<UrlShort/>} />
                    <Route path="links" element={<AllUrls/>} />
                </Route>
        </Routes>
    )
}