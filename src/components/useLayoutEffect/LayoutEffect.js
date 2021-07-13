import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const LayoutEffect = () => {

    const {counter, increment, decrement, reset} = useCounter(1);

    if (counter < 1) {
        reset();
    }

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const { quote } = !!data && data[0];

    const pTagRef = useRef();

    const [boxSize, setBoxSize] = useState({});
    
    useLayoutEffect(() => {

        setBoxSize(pTagRef.current.getBoundingClientRect());
        
    }, [quote])
    
    return (
        <div>
            <h1>Breaking Bad API Quotes</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p ref={pTagRef} > { quote } </p>
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>

            <button 
                className="btn btn-warning mx-1" 
                onClick={decrement}
            > Previous quote
            </button>
            <button 
                className="btn btn-primary mx-1" 
                onClick={increment}
            > Next quote
            </button>

        </div>
    )
}
