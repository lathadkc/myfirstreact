import React from 'react';
import { useState } from "react";

function HookcounterThree() {

    const [name,setName] = useState ({fn:'joshna',ln:'D'})
    return(
        <div>
<input type = "text" value = {name.fn} onChange = {(e) =>setName({...name,fn:e.target.value} )} />
<input type = "text" value = {name.ln} onChange = {(e) => setName({...name,ln:e.target.value})}/>
<h2>your first name is {name.fn}</h2>
<h2>your last name is {name.ln}</h2>
{JSON.stringify(name)}
        </div>


    );
}
export default HookcounterThree;