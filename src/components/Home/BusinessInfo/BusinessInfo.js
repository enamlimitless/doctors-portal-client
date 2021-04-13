import React from 'react';
import './BusinessInfo.css';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
const BusinessInfo = () => {
    const infosData = [
        {
            title : 'Opening Hour',
            description: 'We Open 10AM to 5PM',
            icon: faClock,
            background: 'primary'
        },
        {
            title : 'Visit Our Location',
            description: 'Green Road, Luton',
            icon: faMapMarkedAlt,
            background: 'dark'
        },
        {
            title : 'Contact Us Now',
            description: '+341 555 333 999',
            icon: faPhone,
            background: 'primary'
        }
    ]
    return (
        <section className="container">
            <div className="row">
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;