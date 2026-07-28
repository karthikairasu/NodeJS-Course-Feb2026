import React, {useState} from 'react'
import axios from 'axios';
const InsertUser = () => {
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
        mobile: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/insert', user).then((res) => console.log(res.data))
        .catch((err)=>{
            console.log(err);
        })
    };
  return (
    <div>
        <h1>Insert User</h1>
        <form onSubmit={handleSubmit}>
            Name: <input type="text" onChange={(e) => setUser({...user, username: e.target.value})}/><br/>
            Password: <input type="password" onChange={(e) => setUser({...user, password: e.target.value})}/><br/>
            Email: <input type="email" onChange={(e) => setUser({...user, email: e.target.value})}/><br/>
            Mobile: <input type="number" onChange={(e) => setUser({...user, mobile: e.target.value})}/><br/>
            <button type="submit">Insert</button>
        </form>
    </div>
  )
}

export default InsertUser