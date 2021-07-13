import React, { useMemo, useState } from 'react'
import { heavyProcess } from '../../helpers/heavyProcess';

import { useCounter } from '../../hooks/useCounter';

import '../useEffect/effects.style.css';

export const MemoHook = () => {

    const { counter, increment } = useCounter(1000);
    const [show, setShow] = useState(true);

    // memorize the result of a function execution
    const heavyProcessMemo = useMemo(() => heavyProcess(counter), [counter])

    return (
        <div>
            <h1>Memo Hook </h1>
            <h3>Counter: {counter} </h3>
            <hr />

            <p> { heavyProcessMemo } </p>

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
