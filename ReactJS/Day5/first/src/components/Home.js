import React,{useState} from 'react'

function Home() {
    const [state, setState] = useState("Karthik");
  return (
    <div>
        <h1>This is my home component</h1>
        <h2 className="">Name: {state}</h2>
        <button onClick={() => setState("Ramesh")}>Change State</button>
        <form>
            Enter Name: <input type="text" onChange={(e) => setState(e.target.value)}/>
        </form>
    </div>
  )
}

export default Home;