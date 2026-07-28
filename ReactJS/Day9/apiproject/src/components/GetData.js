import React, { useEffect, useState } from 'react'
import axios from 'axios';

const GetData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
    //   axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(response => {
    //       setUsers(response.data);
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(data => setUsers(data))
    // .catch(error => console.error(error));
    }, []);
  return (
    <div>
        <h1 className="">Get User Details</h1>
        <table border="1" cellspacing="0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address.street}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.company.name}</td>
                            </tr>
                        ))
                    }
            </tbody>
        </table>
    </div>
  )
}

export default GetData