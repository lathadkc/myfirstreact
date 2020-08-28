import React, { useEffect, useState } from 'react'


export default function test() {
    
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [c, setC] = useState(a+b)
    useEffect(() => {

    }, []);
    return (
        <div>
            <input type = "text" value = {a} onChange = {(e) => (setA(e.target.value))} />
            <input type = "text" value = {b} onChange = {(e) => setB(e.target.value)} />
            {c}
        </div>
    )
}
