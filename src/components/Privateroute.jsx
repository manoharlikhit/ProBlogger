import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { isloggedIn } from '../auth';


const Privateroute =()=> {
        return isloggedIn()? <Outlet/> : <Navigate to={'/login'} />;
    }

export default Privateroute;