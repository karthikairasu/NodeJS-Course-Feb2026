import React, { useEffect, useRef, useState } from 'react'

const RefHook = () => {
    const [name, setName] = useState("Karthi");

    const previousName = useRef('');
    useEffect(() => {
        previousName.current = name;
        console.log(name);
    }, [name]);

  return (
    <div>
        <h1>Ref Hook</h1>
        <h2>Name: {name}</h2>
        <p>Previous Name: {previousName.current}</p>
        <button onClick={() => setName("Ramesh")}>Change Name</button>
    </div>
  )
}

export default RefHook