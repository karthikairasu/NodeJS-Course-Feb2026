import React, { useEffect, useState } from 'react'
import axios from 'axios';
const GetUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/userdetails')
        .then((res) => {
            setUsers(res.data.message);
        }).catch((err) => console.log(err));
    }, []);
    return (
    <div>
        <h1>Get Users</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => (
                        <tr key={user.sno}>
                            <td>{user.sno}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <br/>
    </div>
    )
}

export default GetUsers