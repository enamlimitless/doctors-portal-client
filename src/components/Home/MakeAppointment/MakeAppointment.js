import React from 'react';
import './MakeAppointment.css';
import doctor from '../../../images/doctor.png';
const MakeAppointment = () => {
    return (
        <section className="appointment-container clearfix">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={doctor} alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="text-info">APPOINTMENT</h3>
                        <h1 className="head-text text-light">Make An AppointMent Today</h1>
                        <p className="text-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tempore illum modi repellendus! Optio quibusdam at quod odio consequatur. Animi.
                        </p>
                        <button className="btn btn-style">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;