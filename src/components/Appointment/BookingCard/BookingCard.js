import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-lg-4">
            <div className="card text-center p-5 mt-5">
                <div className="card-body">
                    <h3>{booking.title}</h3>
                    <h4 className="my-4">{booking.time}</h4>
                    <small>{booking.space}</small>
                    <div className="d-flex justify-content-center">
                        <button onClick={openModal} className="btn btn-style mt-3">BOOK APPOINTMENT</button>
                    </div>
                    <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} booking={booking.title}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;