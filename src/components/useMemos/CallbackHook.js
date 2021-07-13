import React, { useCallback, useState } from 'react'

import '../useEffect/effects.style.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(1);

    // Memorize a function, if you don't use callback hook,
    // by each call to the component, the functions is created in memory
    const increment = useCallback(
        () => {
            setCounter(c => c + 1);
        },
        [setCounter],
    )
    
    return (
        <div>
            <h1> Callback Hook: { counter } </h1>
            <hr />
            <ShowIncrement increment={increment} />
        </div>
    )
}
