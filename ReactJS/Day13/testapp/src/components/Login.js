import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  return (
    <div>
        <h1>Login Here</h1>
        <form>
            <label htmlFor="email">Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' /><br/>
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'/><br/>
            <button type="submit" onClick={(e)=>{
                e.preventDefault();
                if(email === "admin@admin.com" && password === "12345"){
                    setMessage("Login successful");
                }else{
                    setMessage("Login failed");
                }
            }}>Login</button>
            <p>{message}</p>
        </form>
    </div>
  )
}

export default Login