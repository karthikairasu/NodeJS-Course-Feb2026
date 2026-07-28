import React from 'react'
import { useNavigate } from 'react-router-dom';

const Support = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Support page</h1>
        <p>Welcome to our support page</p>
        <button onClick={()=>navigate('/login')}>Click to Login</button>
    </div>
  )
}

export default Support