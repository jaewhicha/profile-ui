import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { openStatus, toggleModal } from '../ModalSlice'
import ReactModal from 'react-modal'
import './ContactModal.scss'

export function ContactModal() {
    const isOpen = useSelector(openStatus)
    const dispatch = useDispatch()

    return (
        <ReactModal isOpen={isOpen}>
            <div className="modal-content">
                <div className="modal-">
                    <h3>This is a modal!</h3>
                </div>
                <div>
                    <button onClick={() => dispatch(toggleModal())}>Close</button>
                </div>
            </div>
            
            
            
        </ReactModal>
    )
}

