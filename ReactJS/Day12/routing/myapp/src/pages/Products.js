import React from 'react'
import { useParams } from 'react-router-dom';

const Products = () => {
    const {id}=useParams();
  return (
    <div>
        <h1>This is my products component</h1>
        <h2>{id}</h2>
    </div>
  )
}

export default Products