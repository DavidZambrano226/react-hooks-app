import React, { useEffect, useState } from 'react'
import './effects.style.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;
    
    useEffect( () => {
        console.log('Hello!!');
    }, [formState])

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState, 
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>Use Effect</h1>
            <hr />
            {/* <form> */}
                <div className="form-group">
                    <input 
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your name"
                        autoComplete="off"
                        value={ name }
                        onChange={ handleInputChange }
                    />
                </div>
                <br />
                <div className="form-group">
                    <input 
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="email@gmail.com"
                        autoComplete="off"
                        value={ email }
                        onChange={ handleInputChange }
                    />
                </div>
            {/* </form> */}
            <br />

            { (name === '123') && <Message /> }

        </>
    )
}
