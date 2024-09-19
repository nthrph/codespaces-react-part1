import React, {useState} from 'react';
 
export default function Counter(){
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("Type here!");
    return(<>
        <input type ="text"
            value={value}
            onChange={(event)=>setValue(event.target.value)}
        />
        <h3> You Type {value.length} chars </h3>

        <button onClick={()=> setCount(count+1)}> Click me </button>
        <button onClick={()=> setCount(0)}> Reset! </button>
        <p>You clicked {count} time</p>
        
    </>);
}