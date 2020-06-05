import { useState } from "react";
import React from 'react';

 function HookCounter() {
    const [count,setCount] = useState(0);

    
        return (
             <div >
                 <table >
<tr> 
 <td>  Counter {count} </td> </tr>
<tr>   <td><button onClick = {() => setCount(count +1)}  >increment</button></td>
<td><button onClick = {() => setCount(count -1)}  >Decrement</button></td>
<td><button onClick = {() => setCount(0)}  >Reset</button></td>
 </tr>

                 </table>
             
             
             
             
             
                 
                  </div>
        );
    

}

export default HookCounter