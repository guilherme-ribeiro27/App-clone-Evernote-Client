import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'

const privateRoute = ({ component: Component, ...rest})=>{
    // return(
    // <Route {...rest} render={props =>(
    //     localStorage.getItem('user') ? <Component {...props} /> : <Navigate to={{pathname: '/login'}}/>
    // )}/> 
    // )
    return localStorage.getItem('user') ? <Outlet/> :<Navigate to={{pathname: '/login'}}/>
}

export default privateRoute