import axios from 'axios';
import React, { useState } from 'react'

const Register = () => {
    const [users, setUsers] = useState([]);
    const [register, setRegister] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        age: ""
    });
/**
 * Handles the form submission for registering a new user.
 * Prevents the default form submission behavior using e.preventDefault().
 * Posts the register state to the server using axios.post() and logs the response data to the console.
 * If an error occurs, logs the error to the console.
 */
    const onRegister = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/register', register)
        .then((res) => console.log(res.data))
        .catch((err)=>{
            console.log(err);
        })
    };
    const viewData = () => {
        axios.get('http://localhost:3000/users')
        .then((res) => {
            console.log(res.data)
            setUsers(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        <h1>This is Register Component</h1>
        <form onSubmit={onRegister}>
            Username : <input type="text" name="name" value={register.name} onChange={(e) => setRegister({...register, name: e.target.value})}></input><br></br>
            Email : <input type="email" name="email" value={register.email} onChange={(e) => setRegister({...register, email: e.target.value})}></input><br></br>
            Password : <input type="password" name="password" value={register.password} onChange={(e) => setRegister({...register, password: e.target.value})}></input><br></br>
            Mobile : <input type="number" name="mobile" value={register.mobile} onChange={(e) => setRegister({...register, mobile: e.target.value})}></input><br></br>
            Age : <input type="number" name="age" value={register.age} onChange={(e) => setRegister({...register, age: e.target.value})}></input><br></br>
            <button type="submit">Register</button>
        </form>
        <button onClick={viewData}>View Data</button>
        <table border='1' width="100%" rules="all">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Mobile</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => (
                        <tr key={user.sno}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.mobile}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Register