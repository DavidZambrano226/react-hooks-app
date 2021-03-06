import React from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.style.css';

export const FormWithCustomHook = () => {
    
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues);
    }

    return (
        <>
            <h1>Form With Custom Hook</h1>
            <hr />
            <form onSubmit={ handleSubmit }>
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
                <br />
                <div className="form-group">
                    <input 
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="*****"
                        autoComplete="off"
                        value={ password }
                        onChange={ handleInputChange }
                    />
                </div>
                <button className="btn btn-success mt-2">Save</button>
            </form>
            <br />
        </>
    )
}
