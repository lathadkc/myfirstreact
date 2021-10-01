import React, { useState } from 'react'

function SelectMultiple() {
    
    const [s1, setS1] = useState(['cit','app']);
    const [fruits, setFruits] = useState([{id:"id1",value:"app",label:"Apple",isSelected:false},
    {id:"id2",value:"ban",label:"Banana",isSelected:true},{id:"id3",value:"cit",label:"CitrusFruit",isSelected:false},
    {id:"id4",value:"dra",label:"Dragonzfruit",isSelected:false}])
    
    function hs(e) {

        setS1([...e.target.selectedOptions].map(op => {
            return op.value;    
        }));
    }
    return (
        <div>
hai SelectMultiple            
<select value = {s1} onChange = {hs} multiple>
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

export default SelectMultiple
