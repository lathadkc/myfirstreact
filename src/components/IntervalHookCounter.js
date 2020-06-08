import React, { useState,useEffect } from 'react'

const IntervalHookCounter = () => {
    const [count, setCount] = useState(0);
    const someProp = 0;
    const tick = () => {
       //setCount(count+1);
       
       setCount(oc => oc+1);
    }
    // function doSomething() {
    //     console.log(someProp);
        
    // }
    useEffect(() => {
        function doSomething() {
            console.log(someProp);
            
        }

        console.log("Within useEffect IntervalHookCounter");
        doSomething();
        
     const interval =  setInterval(tick,1000);
    return () => {
        clearInterval(interval);
    }
    
     //},[someProp] ); 
    //},[count]);
},[]);
    return (
        <div>
            count {count}
            
        </div>
    )
}

export default IntervalHookCounter
