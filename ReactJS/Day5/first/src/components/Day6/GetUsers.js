import React, { useState } from 'react'
import DisplayUsers from '../DisplayUsers'

const GetUsers = () => {
    const [users, setUsers] = useState({
        name: "",
        age: "",
        city: ""
    });
    return (
        <div>
            <h1>This is Get Users Component</h1>
            <pre>
                <form>
                Name: <input type="text" placeholder='Enter Name' onChange={(e) => setUsers({...users, name: e.target.value})} /><br/>
                Age: <input type="text" placeholder='Enter Age' onChange={(e) => setUsers({...users, age: e.target.value})} /><br/>
                City: <input type="text" placeholder='Enter City' onChange={(e) => setUsers({...users, city: e.target.value})} />
                </form>
            </pre>
            {/* <DisplayUsers name="karthi" age="31" city="Chennai" /> */}
            <DisplayUsers name={users.name} age={users.age} city={users.city} />
        </div>
    )
}

export default GetUsers
