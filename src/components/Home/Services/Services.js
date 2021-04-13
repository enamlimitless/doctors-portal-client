import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import teeth from '../../../images/teeth.png';
import ServicesDetail from '../ServicesDetail/ServicesDetail';

const Services = () => {
    const serviceData = [
        {
            icon: fluoride ,
            title: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ullam facilis expedita quasi!'  
        },
        {
            icon: cavity,
            title: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ullam facilis expedita quasi!'  
        },
        {
            icon: teeth,
            title: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit, amat connecter adipisicing edit. Autumn ulnar facials expediter quasi!'  
        }
    ]
    console.log(serviceData.length)
    return (
        <section className="services-container pt-5">
            <div className="container">
                <div className="row text-center mt-5">
                    <h4 className="sub-head">Our Services</h4>
                    <h1 className="head-text">Services  We Provided</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        serviceData.map(service => <ServicesDetail service={service}></ServicesDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;