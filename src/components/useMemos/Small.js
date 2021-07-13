import React from 'react'

export const Small = React.memo(({counter}) => {
    console.log('Small component was rendered');
    return (
        <small>
            {counter}
        </small>
    )
}, null)