import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.style.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100);

    return (
        <>
            <h1>Counter with custom Hook { state } </h1>
            <hr />

            <button className="btn btn-primary" onClick={ () => increment(2) } > +1 </button>  
            <button className="btn btn-warning" onClick={ reset } > Reset </button>  
            <button className="btn btn-secondary" onClick={ () => decrement(2) } > -1 </button>  
        </>
    )
}
