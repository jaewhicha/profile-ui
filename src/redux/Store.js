import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '../components/modals/ModalSlice'
import contactReducer from '../components/forms/ContactFormSlice'

export default configureStore({
    reducer: {
        modal: modalReducer,
        contactForm: contactReducer
    }
})