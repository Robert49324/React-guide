import React, { useState } from "react"

const Counter = function(){
    const [count, SetCount] = useState(0)
    
    function increment() {
        SetCount(count + 1);
    }
    
      function decrement() {
        SetCount(count - 1);
    } 

    return(
        <div>
            <h1>{count}</h1>

            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter;