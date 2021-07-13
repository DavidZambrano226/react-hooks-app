import React, { useState } from 'react'

import { MultipleCustomHooks } from '../examples/MultipleCustomHooks';

import '../useEffect/effects.style.css';

export const RealExampleRef = () => {
    
    const [show, setShow] = useState(false)
    
    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />
            {
                show && <MultipleCustomHooks />
            }

            <button 
                className="btn btn-dark"
                onClick={ () => setShow(!show) }
            >
                Show/Hide
            </button>

        </div>
    )
}
