import React from 'react'
import { useState,useEffect } from 'react'

function MultiUse() {
    const[a,setA] = useState(1);
    const [b, setB] = useState(2);
    const [c, setC] = useState(0)
    const [d, setD] = useState("add");
    const [e, setE] = useState(0);
    useEffect(() => {
         console.log("within useEffect");
    // const lat = hd();
    // console.log(lat);
    // setC(hd());
console.log(d);
    
        switch (d) {
            case "add":
                
                setC(a+b);
                break;
            case "sub":
                
                setC(a-b);
                break;
            case "multi":
                
                setC(a*b);
                break;
            default:
                break;
        }
    

    }, [d,a,b]);


    // const hd = () => {
    //     console.log("within hd");
    //     switch (d) {
    //         case "add":
                
    //             return (a+b);
    //         case "sub":
                
    //             return a-b;
    //         case "multi":
                
    //             return a*b;
    //         default:
    //             break;
    //     }
    // }
    const hdA = (e) => {
        const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (e.target.value === '' || re.test(e.target.value)) 
    {
        alert((e.target.value))
        setA(Number(e.target.value))
    }
    else {
        alert ("only numbers")
    }
        // if((Number(e.target.value))){
        //     console.log("within if hdA");
        //  setA(Number(e.target.value))
        // }
        // else {
        //     alert("onely numbers")
        // }
    }
    return (
        <div>
            hai from MultiUse 
            <h1>{c}</h1> <br/>
            <input type = "text" value = {a} onChange = {hdA} />
            <input type = "text" value = {b} onChange = {(e) => setB(Number(e.target.value))}/>
            <select value = {d}  onChange = {e => setD(e.target.value)} >
                <option value = "add">Addition</option>
                <option value = "sub" selected >Subtraction</option>
                <option value = "multi">Multiplication</option>
            </select>
        </div>
    )
}

export default MultiUse
