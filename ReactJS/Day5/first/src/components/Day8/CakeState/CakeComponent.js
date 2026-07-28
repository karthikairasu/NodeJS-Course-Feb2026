import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CakeComponent = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const [cake, setCake] = useState({cubcake: 0, icecream: 0, bcake: 0});
  return (
    <div>
        <h2>This is my CakeComponent</h2>
        <h2>Cubcake: {state.cubcake}</h2>
        <h2>Icecream: {state.icecream}</h2>
        <h2>BCake: {state.bcake}</h2>

        Buy Cub Cake: <input type="number" onChange={(e) => setCake({...cake, cubcake: e.target.value})}/>
        Buy Ice Cream: <input type="number" onChange={(e) => setCake({...cake, icecream: e.target.value})}/>
        Buy B Cake: <input type="number" onChange={(e) => setCake({...cake, bcake: e.target.value})}/><br/>

        <button onClick={() => dispatch({type: "BUY_CAKE", payload: cake.cubcake})}>Buy Cake</button>
        <button onClick={() => dispatch({type: "BUY_ICECREAM", payload: cake.icecream})}>Buy Icecream</button>
        <button onClick={() => dispatch({type: "BUY_BCAKE", payload: cake.bcake})}>Buy BCake</button>
        <br/>
        Add Cub Cake: <input type="number" onChange={(e) => setCake({...cake, cubcake: e.target.value})}/>    
        Add Ice Cream: <input type="number" onChange={(e) => setCake({...cake, icecream: e.target.value})}/>
        Add B Cake: <input type="number" onChange={(e) => setCake({...cake, bcake: e.target.value})}/>
        <br/>
        <button onClick={() => dispatch({type: "ADD_CAKE", payload: cake.cubcake})}>Add Cake</button>
        <button onClick={() => dispatch({type: "ADD_ICECREAM", payload: cake.icecream})}>Add Icecream</button>
        <button onClick={() => dispatch({type: "ADD_BCAKE", payload: cake.bcake})}>Add BCake</button>
    </div>
  )
}

export default CakeComponent