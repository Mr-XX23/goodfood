import React from 'react'
import appphoto from './img/appphoto.png';
import gplay from './img/gplay.png';
import apple from './img/apple.png';

function Downloadapp() {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-6 col-md-6 d-flex align-items-center">
                        <div className="">
                            <h5 className="head_text">NEPAL’S ONE STOP FOODIE APP</h5>
                            <p className="para_text">Grab Free Deals. Get Food delivered. Read restaurant reviews. Browse Menus.</p>
                            <p className="para_text">Get your Free GoodFood App today.</p>
                            <div className="">
                            <img src={gplay} alt="gplay" className="my-2 mx-1 widthimg2"/>
                            <img src={apple} alt="apple" className="my-2 mx-1 widthimg2"/>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-6 col-md-6">
                        <img src={appphoto} alt="appdownlaod" className="widthimg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Downloadapp
