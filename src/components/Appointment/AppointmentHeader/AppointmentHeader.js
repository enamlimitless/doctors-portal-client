// import React, { useState } from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = ({handleDateChange}) => {
    // const [value, onChange] = useState(new Date());
   
    return (
        <header>
            <main>
                <div className="container">
                    <div style={{ height: '600px' }} className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <h1 className="head-text">Appointment</h1>
                            <Calendar
                                onChange={handleDateChange}
                                value={new Date()}
                            />
                        </div>
                        <div className="col-lg-6">
                            <img src={chair} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </main>
        </header>
    );
};

export default AppointmentHeader;