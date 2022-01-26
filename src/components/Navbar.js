import React from "react";
import logo from "./img/Main_logo.png";
import '../index.css';
import { Link } from "react-router-dom";

const food = {
  fontWeight: "bold",
  fontSize: "26px",
  color: "#2e1055"
};
const Hover = () => {
  if (document.getElementById('d-button:hover, d-button:focus')){
    document.getElementById('d-button2').style.background = '#198754';
 }else{
   document.getElementById('d-button2').style.background = 'none';
 }
};

const Hover1 = () => {
if (document.getElementById('d-button2:hover, d-button:focus d-button:active')){
  document.getElementById('d-button').style.background = 'none';
}else{
 document.getElementById('d-button').style.background = '198754';
}
};

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/goodfood">
            <img
              src={logo}
              alt="logo001"
              width="10%"
              height="50%"
              className="hide d-inline-flex"
            />
            <span className="Good mx-1">GOOD</span>
            <span style={food}>FOOD</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="cen navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link className="nav-link active" aria-current="page" to="/getorder">
                  Get Order
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/partnershipwithus">
                  Patnership with Us
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/contactus">
                  Contact Us 
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-success mx-1" id="d-button" onChange={Hover} type="submit">Sign In</button>
              <button className="button btn btn-outline-success mx-1" id="d-button2" onChange={Hover1} type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
