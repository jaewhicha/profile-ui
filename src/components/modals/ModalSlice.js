import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modalProps: {
            open: false
        }
    },
    reducers: {
        openModal: (state) => {
            state.modalProps.open = true
        },
        closeModal: (state) => {
            state.modalProps.open = false
        },
        toggleModal: (state) => {
            state.modalProps.open = !state.modalProps.open
        }
    }
})

export const { openModal, closeModal, toggleModal} = modalSlice.actions
export const open = state => state.modalProps.open
export default modalSlice.reducer