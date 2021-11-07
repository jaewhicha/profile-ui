import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '../components/modals/ModalSlice'

export default configureStore({
    reducer: {
        modal: modalReducer
    }
})