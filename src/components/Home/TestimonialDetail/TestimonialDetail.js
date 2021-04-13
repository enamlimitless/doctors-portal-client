import React from 'react';
import './TestimonialDetail.css';
const TestimonialDetail = ({ testimonial }) => {
    console.log({ testimonial })
    return (
        <div className="col-lg-4 p-3">
            <div className="card card-body test-card p-5">
                <blockquote className="descrip">{testimonial.quote}</blockquote>
                <div className="d-flex">
                    <div>
                        <img className="img-fluid" style={{ width: '6rem' }} src={testimonial.img} alt="" />
                    </div>
                    <div className="ms-4 mt-3">
                        <h4 className="text-info">{testimonial.name}</h4>
                        <h5 className="text-secondary">{testimonial.location}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetail;