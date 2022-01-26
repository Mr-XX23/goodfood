import React from "react";
import "../index.css";

function GetOederItem() {
  return (
    <>
      <div className="col-12 col-sm-12 col-lg-4 col-md-6 col-xl-4 card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg bgimg1">
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
            Short title, long jacket
          </h2>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <img
                src="https://github.com/twbs.png"
                alt="Bootstrap"
                width="32"
                height="32"
                className="rounded-circle border border-white"
              />
            </li>
            <li className="d-flex align-items-center me-3">
              <svg className="bi me-2" width="1em" height="1em">
                <use xlinkHref="#geo-fill" />
              </svg>
              <small>Earth</small>
            </li>
            <li className="d-flex align-items-center">
              <svg className="bi me-2" width="1em" height="1em">
                <use xlinkHref="#calendar3" />
              </svg>
              <small>3d</small>
            </li>
          </ul>
        </div>
      </div> 
    </>
  );
}

export default GetOederItem;
