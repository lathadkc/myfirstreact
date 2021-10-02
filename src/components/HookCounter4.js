import React, { useState }  from 'react';

function HookCounter4() {
    const [items,setItems] = useState([])
    //k1
    const hc = () => {
        setItems([...items,{id : items.length, value : items.length+100}]);
    }
    return(
<div>
    button
<button  onClick = {hc} >Add A Number</button>
<ul>
{
items.map(item => (
    <li key = {item.id} >{item.value}</li>
    
))
}
</ul>
</div>
    );
}
export default HookCounter4;