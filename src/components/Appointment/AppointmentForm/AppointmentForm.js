import React from 'react';
import './AppointmentForm.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '50rem'
    }
};
Modal.setAppElement('#root')
const AppointmentForm = ({ modalIsOpen, closeModal, booking, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        closeModal()
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <div className="d-flex justify-content-end">
                    <button onClick={closeModal} class="btn-close"></button>
                </div>
                <div>
                    <h2 className="text-center sub-head mb-4">{booking}</h2>

                </div>
                <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control p-4 my-3" type="time" {...register("time")} placeholder=" Select Time" />
                    <input className="form-control p-4 my-3" type="text" {...register("name")} placeholder="Your Name" />
                    <input className="form-control p-4 my-3" type="text" {...register("phoneNumber")} placeholder="Phone Number" />
                    <input className="form-control p-4 my-3" type="email" {...register("email")} placeholder="Email" />
                    <input className="form-control p-4 my-3" type="date" {...register("date")} placeholder="MM/DD/YY" />
                    <select className="form-control p-4 my-3" {...register("gender")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                    </select>
                    <div className="d-flex justify-content-end">
                        <input className="btn-style btn" type="submit" />
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;