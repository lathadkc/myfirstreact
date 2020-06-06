import React, { useState, useEffect } from 'react';


function HookCounterOne() {
    const[count,setCount] = useState(0);
    useEffect(() =>{
        console.log("within useEffectHookCounterONe");
        document.title = `you clicked ${count} times`;
    });
    return(
<div>

<button onClick = {() => setCount(count+1)} >Click {count}times</button>
</div>

    );
    
}

export default HookCounterOne;