import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RefreshHandler = ({setIsAuthenticated}) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('token')){
            setIsAuthenticated(true);
            if(location.pathname === '/' ||
                location.pathname === '/login' ||
                location.pathname === '/signup'
            ){
                navigate('/dashboard',{replace: false});
            }
        }
    },[location, navigate, setIsAuthenticated])
  return (
    null
  )
}

export default RefreshHandler