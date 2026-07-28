import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AccessData = () => {
    const [login, setLogin] = useState({username: '', password: ''});
    const [message, setMessage] = useState('');
    const [result, setResult] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/users')
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
    },[])
    const onLogin = (e) => {
        e.preventDefault();
        console.log(login);
        axios.post('http://localhost:3000/login', login)
        .then((res) => {
            console.log(res.data);
            setResult(res.data);
            if(res.data.length>0){
                setMessage('Login successfully');
            }else{
                setMessage('Invalid username or password');
            }
        })
        .catch((err) => {
            console.error(err);
        });
    }
  return (
    <div>
        <h1>This is AccessData Component</h1>
        <form onSubmit={onLogin}>
            Username: <input type="text" onChange={(e) => setLogin({...login, username: e.target.value})}/><br/>
            Password: <input type="password" onChange={(e) => setLogin({...login, password: e.target.value})}/><br/>
            <button type="submit">Login</button><br/>
            <p>{message}</p>
        </form>
    </div>
  )
}

export default AccessData