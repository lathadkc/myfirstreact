import React, { useState } from 'react'
import HookMouse from './Hook Mouse'

const MouseContainer = () => {
    const [display, setDisplay] = useState(0)
    
    return (
        <div>
            <button onClick = {() => setDisplay(!display) } >Toggle Display</button>
            { display && <HookMouse/>}
        </div>
    )
}

export default MouseContainer
