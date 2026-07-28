import React, { useEffect } from 'react'

const useCount = (initialValue) => {
    const [count, setCount] = React.useState(initialValue);
    useEffect(() => {
        console.log('count changed', count);
        
    }, [count]);
  return [count, setCount];
}

export default useCount