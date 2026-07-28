import React, { use, useEffect, useState } from 'react';
import axios from 'axios';

const GetData = () => {
  const [result, setResult] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  useEffect(()=>{
    axios.get('http://localhost:3000/about')
    .then((res)=>{
      console.log(res.data)
      setResult(res.data);
    }).catch((err)=>{
      console.error(err);
    });

  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/getdata', formData)
    .then((res)=>{
      console.log(res.data)
      setResult(res.data);
    }).catch((err)=>{
      console.error(err);
    });
  }

  return (
    <div>
      <h1>Get Data</h1>
      <h2>{result?.result}</h2>
      <h3>{result?.message}</h3>
      <form onSubmit={handleSubmit}>
        UserName: <input type="text" name="username" id="username" onChange={(e)=>setFormData({...formData, username: e.target.value})} /><br/>
        Password: <input type="password" name="password" id="password" onChange={(e)=>setFormData({...formData, password: e.target.value})} /><br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default GetData