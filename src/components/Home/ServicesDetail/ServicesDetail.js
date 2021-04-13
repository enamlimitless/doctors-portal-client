import React from 'react';
import './ServicesDetail.css';
const ServicesDetail = ({service}) => {
    console.log('This is',{service})
    return (
        <div className="col-lg-4 text-center mt-5">
            <img className="icon" src={service.icon} alt=""/>
            <h2 className="my-5">{service.title}</h2>
            <p className="descrip">{service.description}</p>
        </div>
    );
};

export default ServicesDetail;