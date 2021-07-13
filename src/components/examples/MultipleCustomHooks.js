import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import '../useEffect/effects.style.css'

export const MultipleCustomHooks = () => {

    const {counter, increment, decrement, reset} = useCounter(1);

    if (counter < 1) {
        reset();
    }

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];
    
    return (
        <div>
            <h1>Breaking Bad API Quotes</h1>
            <hr />
            {
                loading 
                ?
                    (
                        <div className="alert alert-info text-center">
                            loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p> { quote } </p>
                            <footer className="blockquote-footer" >{    author }</footer>
                        </blockquote>
                    )
            }

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
