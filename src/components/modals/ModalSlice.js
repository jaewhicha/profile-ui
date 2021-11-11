import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        open: false
    },
    reducers: {
        openModal: (state) => {
            state.open = true
        },
        closeModal: (state) => {
            state.open = false
        },
        toggleModal: (state) => {
            state.open = !state.open
        }
    }
})

export const { openModal, closeModal, toggleModal} = modalSlice.actions
export const openStatus = state => state.modal.open
export default modalSlice.reducer