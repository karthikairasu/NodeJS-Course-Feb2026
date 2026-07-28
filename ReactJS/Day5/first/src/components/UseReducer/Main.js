import React, { useReducer } from 'react'

    const initialState = {
        count: 0
    }

    const countReducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 }
            case 'decrement':
                return { count: state.count - 1 }
            case 'reset':
                return initialState;
            default:
                return state;
    }
}
const Main = () => {
    const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
        <h1>Counter</h1>
        <h2>{state?.count}</h2>
        <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default Main