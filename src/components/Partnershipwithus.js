import React from "react";
import appphoto from "./img/appphoto.png";
import gplay from "./img/gplay.png";
import apple from "./img/apple.png";

const food = {
  fontWeight: "bold",
  fontSize: "53px",
  color: "#2e1055",
};

const Good1 = {
  fontSize: "53px",
};

function Partnershipwithus() {
  return (
    <>
      <div className="container-fluid headingimg">
        <section className="section10">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="downfall">
                <h1 className="text-center">
                  <span className="Good" style={Good1}>
                    GOOD{" "}
                  </span>
                  <span className="food" style={food}>
                    FOOD
                  </span>
                </h1>
                <h1 className="text-center text-white">
                  Nepal's One Stop App for Foodies
                </h1>
                <div class="row">
                  <div class="col">
                    <img
                      src={gplay}
                      alt="gplay"
                      className="widthimg2 rounded mx-auto d-block"
                    />
                  </div>
                  <div class="col">
                    <img
                      src={apple}
                      alt="apple"
                      className="widthimg2 rounded mx-auto d-block"
                    />
                  </div>
                </div>
                <div className=" d-flex justify-content-center my-2">
                  <button type="button" class="btn btn-warning my-2 clickhere">
                    Restaurant Partner, Click Here
                  </button>
                </div>
                <h4 className="text-center text-white my-2">
                  For Phone orders, Call 012976970 / 9849820705
                </h4>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <img src={appphoto} alt="appdownlaod" className="widthimg" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Partnershipwithus;
