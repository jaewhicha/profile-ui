import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { openStatus, toggleModal } from '../ModalSlice'
import ReactModal from 'react-modal'
import { ContactForm } from '../../forms/ContactForm'
import './ContactModal.scss'

export function ContactModal() {
    const isOpen = useSelector(openStatus)
    const dispatch = useDispatch()


    return (
        <ReactModal isOpen={isOpen}
            className="modal-container"
            overlayClassName="modal-overlay"
            appElement={document.getElementById('root')}
            preventScroll={true}>
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-title">Contact Me</div>
                    <button className="close-button btn--stroke" onClick={() => dispatch(toggleModal())}>X</button>
                </div>
                <div className="modal-body">
                    <div className="modal-left">
                        <p>
                            The information you submit will only be used solely by jaywitcher.com for 
                            networking purposes and is encrypted and held securely for no more than 
                            180 days then deleted. Your information will not be sold or given to any third party.
                        </p>
                    </div>
                    <div className="modal-right">
                        <ContactForm />
                    </div>
                    
                </div>
            </div>
        </ReactModal>
    )
}

