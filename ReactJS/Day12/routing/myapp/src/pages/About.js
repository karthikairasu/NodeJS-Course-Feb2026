import React from 'react'
import useCount from '../hooks/useCount';

const About = () => {
  const [count, setCount] = useCount(0);
  return (
    <div>
        <h1>This is my about component</h1>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default About