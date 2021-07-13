import React, { useState } from 'react'

import { useCounter } from '../../hooks/useCounter';

import '../useEffect/effects.style.css';
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment } = useCounter(1);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Counter: <Small counter={counter} /> </h1>
            <hr />

            <button 
                className="btn btn-dark mx-2"
                onClick={ increment }
            >
                Increment 
            </button>
            <button 
                className="btn btn-primary"
                onClick={ () => setShow(!show) }
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </div>
    )
}
