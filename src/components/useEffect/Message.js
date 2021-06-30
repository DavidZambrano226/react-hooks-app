import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('Component message was mounted')
        return () => {
            console.log('Component unmounted')
        }
    }, [])

    return (
        <div>
            <h3>Message component</h3>
        </div>
    )
}
