import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookAppointment = ({date}) => {
    const bookingData = [
        {
            title: 'Teeth Orthodotics',
            time: '8:00 AM - 9:00 PM',
            space: '10 Spaces Available'
        },
        {
            title: 'Teeth Orthodotics',
            time: '8:00 AM - 9:00 PM',
            space: '10 Spaces Available'
        },
        {
            title: 'Teeth Orthodotics',
            time: '8:00 AM - 9:00 PM',
            space: '10 Spaces Available'
        },
        {
            title: 'Teeth Orthodotics',
            time: '8:00 AM - 9:00 PM',
            space: '10 Spaces Available'
        },
        {
            title: 'Teeth Orthodotics',
            time: '8:00 AM - 9:00 PM',
            space: '10 Spaces Available'
        },
        {
            title: 'Teeth Orthodotics',
            time: '8:00 AM - 9:00 PM',
            space: '10 Spaces Available'
        }
    ]
    return (
        <div>
            <h3 className="sub-head">Available Appointments On {date.toDateString()}</h3>
            <div className="container">
                <div className="row">
                    {
                        bookingData.map(booking => <BookingCard booking={booking} date={date.toDateString()}></BookingCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;