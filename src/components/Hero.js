import React from "react";
import order from "./img/order.png";
import delivery from "./img/delivery.png";
import delivery2 from "./img/delivery2.png";
import '../index.css'

function Hero() {
  return (
    <>
      <div className="container-fluid hero">
        <div className="container">
          <div className="lc-block text-center title_text2">
            <h2 editable="inline" className="display-4 mt-3">
              <b>What do you feel like today?</b>
            </h2>
          </div>
          <div className="lc-block text-center title_text_sub2">
            <h2 editable="inline" className="tts2 mt-1">
              <b className="">Grab a free restaurant deals</b>
            </h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-4 col-md-4 my-3">
                <div className="card">
                  <img src={order} className="card-img-top top1" alt="..." />
                  <div className="card-body">
                    <h2 className="card-title text-center">Easy To Order</h2>
                    <p className="card-text text-center">
                    You only need a few steps in ordering food.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-4 col-md-4 my-3">
                <div className="card">
                  <img src={delivery2} className="card-img-top top2" alt="..." />
                  <div className="card-body">
                    <h2 className="card-title text-center">Fast Delivery</h2>
                    <p className="card-text text-center">
                    Delivery that is always ontime even faster.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-4 col-md-4 my-3">
                <div className="card">
                  <img src={delivery} className="card-img-top top3" alt="..." />
                  <div className="card-body">
                    <h2 className="card-title text-center">Best Quality</h2>
                    <p className="card-text text-center">
                    Not only fast for us quality is also numbers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-lg btn-success button_2 mb-5 button_3">Give Order &#8594;</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
