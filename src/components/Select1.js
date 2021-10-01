import React, { useState } from 'react'

function Select1() {
    
    const [s1, setS1] = useState('cit')
const [fruits, setFruits] = useState([{id:"id1",value:"app",label:"Apple",isSelected:false},
{id:"id2",value:"ban",label:"Banana",isSelected:true},{id:"id3",value:"cit",label:"CitrusFruit",isSelected:false},
{id:"id4",value:"dra",label:"Dragonzfruit",isSelected:false}])

function hs(e) {
    setS1(e.target.value);
}
    return (
        <div>
            hai from Sel1ct1
            <select value = {s1} onChange = {hs}>
                <option value = 'appl'>hai </option>
                {
                fruits.map((fruit) => {
                  return   <option value = {fruit.value} >{fruit.label}</option>

                })
                }


            </select>

        </div>
    )
}

export default Select1
