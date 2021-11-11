import { createSlice } from '@reduxjs/toolkit'

export const contactFormSlice = createSlice({
    name: 'contactForm',
    initialState: {
        formProps: {
            name: '',
            email: '',
            comments: '',
            company: ''
        }
    },  
    reducers: {
        setForm: (state, action) => {
            state['formProps'][Object.keys(action.payload)[0]] = action.payload[Object.keys(action.payload)[0]]
        }
    }
})

export const { setForm } = contactFormSlice.actions
export const formStatus = state => state.contactForm.formProps
export default contactFormSlice.reducer