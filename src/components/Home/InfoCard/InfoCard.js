import React from 'react';
import './InfoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const InfoCard = ({info}) => {
    console.log({info})
    return (
        <div className="col-lg-4 clearfix">
            <div className={`d-flex p-4 info-container info-${info.background}`}>
                <div className="icon">
                    <FontAwesomeIcon icon={info.icon} />
                </div>
                <div>
                    <h5>{info.title}</h5>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;