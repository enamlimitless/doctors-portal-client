import React from 'react';

const DoctorDetail = ({doctor}) => {
    return (
        <div className="col-lg-4">
            <img className="img-fluid" src={doctor.img} alt=""/>
            <h3 className="text-center my-4">{doctor.name}</h3>
            <h5 className="text-center">{doctor.phone}</h5>
        </div>
    );
};

export default DoctorDetail;