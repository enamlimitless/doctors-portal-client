import React from 'react';
import './HeaderMain.css';
import chair from '../../../images/chair.png';
const HeaderMain = () => {
    return (
        <main>
            <div className="container">
                <div style={{height:'600px'}}className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <h1 className="head-text">Your New Smile <br/> Starts Here</h1>
                        <p style={{color: 'gray'}} className="descrip">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis odio provident ducimus saepe illum repellendus ea. Incidunt vel ratione repellat. Tempora ducimus voluptas fugiat? Asperiores!</p>
                        <button className="btn btn-style mt-3">Get Appointment</button>
                    </div>
                    <div className="col-lg-6">
                        <img src={chair} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;