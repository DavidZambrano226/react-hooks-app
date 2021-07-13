import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {

    console.log('Show increment was executed');

    return (
        <button 
            className="btn btn-primary"
            onClick={ () => { 
                increment();
            }}
        >
            Increment
        </button>
    )
}, null)
