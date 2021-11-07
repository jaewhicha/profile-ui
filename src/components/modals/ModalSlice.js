import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        open: false
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
export const openStatus = state => state.modal.open
export default modalSlice.reducer