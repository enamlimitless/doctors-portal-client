import React from 'react';
import teethTesting from '../../../images/teethtesting.png'
const FeatureService = () => {
    return (
        <section className="clearfix">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-5">
                        <img className="img-fluid" style={{height:'60rem',width:'90%'}} src={teethTesting} alt=""/>
                    </div>
                    <div className="col-lg-7">
                        <h1 className="head-text">Exceptional Dental <br/> Care, On Your Terms</h1>
                        <p className="descrip">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorem, a nobis accusamus dolor nam fuga. Pariatur vero reiciendis quam libero optio necessitatibus quae sequi. Necessitatibus animi ex earum quos! Lorem ipsum dolor sit amet.</p>
                        <button className="btn btn-style">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureService;