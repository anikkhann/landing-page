import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')

const ModalForm = ({ modalIsOpen, closeModal }) => {
    const [text, setText] = useContext(UserContext);
    console.log(text);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const formData = { ...data }
        console.log(formData);
        setText(formData);
        closeModal();
    }
    return (
        <div >
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"

            >
                <form style={{ borderRadius: '1px solid gray', boxShadow: '10px 10px 10px gray', width: '400px' }} className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group" style={{ height: '100px' }}>
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Add Text" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-info">Send Text</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default ModalForm;