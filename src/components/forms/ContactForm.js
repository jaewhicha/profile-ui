import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setForm, formStatus } from '../forms/ContactFormSlice'

export function ContactForm() {
    const form = useSelector(formStatus)
    const dispatch = useDispatch()

    const handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name

        dispatch(setForm({[name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: add in service call to backend
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input type='text' name='name' value={form.name} onChange={handleInputChange}></input>
            </label>
            <label>
                Email
                <input type='email' name='email' value={form.email} onChange={handleInputChange}></input>
            </label>
            <label>
                Company/Organization
                <input type='text' name='company' value={form.company} onChange={handleInputChange}></input>
            </label>
            <label>
                Message
                <textarea name='comments' value={form.comments} onChange={handleInputChange}></textarea>
            </label>
            <input disabled type="submit" value="Submit" />
        </form>
    )
}