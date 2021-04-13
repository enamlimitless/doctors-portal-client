import React from 'react';
import './Testimonial.css';
import person from '../../../images/person.png';
import person2 from '../../../images/person2.png';
import person3 from '../../../images/person3.png';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';
const Testimonial = () => {
    const testimonialData = [
        {
            quote: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias architecto earum molestias fugiat saepe modi ad tenetur ullam, quos adipisci.',
            img: person,
            name: 'Winson Herry',
            location: 'California'
        },
        {
            quote: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias architecto earum molestias fugiat saepe modi ad tenetur ullam, quos adipisci.',
            img: person2,
            name: 'Winson Berry',
            location: 'California'
        },
        {
            quote: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias architecto earum molestias fugiat saepe modi ad tenetur ullam, quos adipisci.',
            img: person3,
            name: 'Winson Cherry',
            location: 'California'
        }
    ]
    return (
        <section className="clearfix">
            <div className="container">
                <div className="row">
                    <h3 className="sub-head">Testimonial</h3>
                    <h1 className="head-text text-center">
                        What's Our Patients Says
                    </h1>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    {
                        testimonialData.map(testimonial => <TestimonialDetail testimonial={testimonial}></TestimonialDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;