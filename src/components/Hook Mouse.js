import React, { useState, useEffect } from 'react'

const HookMouse = () => {
//hai
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [a,setA] = useState(0);
    //hai2docoments
    const lm = (e) => {
        setX(e.clientX);
        setY(e.clientY);
        
    }
    useEffect(() => {
        
        console.log("witin use EFFECT hOOKmOUSE");
        window.addEventListener('mousemove',lm);
        return () => {
            console.log("component unmountingcode HookMouse");
            
            window.removeEventListener('mousemove',lm);
        }
    
        
    },[]);
    
    return (
        <div>
           Hooks X-{x} Y - {y}
HookMouse Changed
        </div>
    )
}

export default HookMouse
