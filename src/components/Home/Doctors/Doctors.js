import React from 'react';
import doctor from '../../../images/doctor.png';
import DoctorDetail from '../DoctorDetail/DoctorDetail';
const Doctors = () => {
    const doctorsData = [
        {
            img: doctor,
            name: 'Dr.Crudi',
            phone: '555 666 777 888'
        },
        {
            img: doctor,
            name: 'Dr.Crudi',
            phone: '555 666 777 888'
        },
        {
            img: doctor,
            name: 'Dr.Crudi',
            phone: '555 666 777 888'
        }
    ]
    return (
        <section>
            <div className="container">
                <h3 className="sub-head">Our Doctors</h3>
                <div className="row">
                    {
                        doctorsData.map(doctor => <DoctorDetail doctor={doctor}></DoctorDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;