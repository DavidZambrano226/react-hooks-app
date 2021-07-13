import React, { useRef } from 'react'
import '../useEffect/effects.style.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                type="text" 
                ref={inputRef}
                className="form-control"
                placeholder="Your name"
            />
            <button 
                className="btn btn-primary mt-5"
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}
