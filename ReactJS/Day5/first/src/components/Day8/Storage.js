import React, { useState } from 'react'

const Storage = () => {
    const [name, setName] = useState({
        name: "",
        role: ""
    });
    const storeValues = () => {
        localStorage.setItem("name", "Karthi");
        sessionStorage.setItem("role", "administrator");
    }
    const getValues = ()=>{
        setName({
            name: localStorage.getItem("name"),
            role: sessionStorage.getItem("role")
        })
    }
  return (
    <div>
        <h1>This is my storage component</h1>
        <button onClick={storeValues}>Store Values</button>
        <button onClick={getValues}>Get Values</button>
        <h2>Name: {name.name}</h2>
        <h2>Role: {name.role}</h2>
    </div>
  )
}

export default Storage