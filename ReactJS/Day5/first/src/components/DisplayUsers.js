import React from 'react'

const DisplayUsers = ({name, age, city}) => {
  return (
    <div>
        <h1>This is Display Users Component</h1>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <h2>City: {city}</h2>
    </div>
  )
}

export default DisplayUsers