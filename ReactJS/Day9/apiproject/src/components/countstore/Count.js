import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Count = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
  return (
    <div>
        <h1> This is count Component</h1>
        <h2>Count: {count}</h2>
        <button onClick={() => dispatch({type: "INCREMENT_ASYNC"})}>Increment</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
        <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
    </div>
  )
}

export default Count