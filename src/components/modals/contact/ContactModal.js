import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { open, toggleModal } from '../ModalSlice'
import ReactModal from 'react-modal'
import './ContactModal.scss'

export function ContactModal() {
    const isOpen = useSelector(open)


    return (
        <ReactModal isOpen={isOpen}>

        </ReactModal>
    )
}

