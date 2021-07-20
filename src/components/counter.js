import React ,{useState} from 'react'

const Counter = (props)=>{

    const [count, setCount]=useState(0)
    const increment = ( )=>{
      setCount(count+1)
    }
  
    return (
          <button onClick={increment}>
              {props.click||"click"} {count}
              </button>
    );
}

export default Counter