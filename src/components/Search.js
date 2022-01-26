import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../index.css';

const food = {
  fontWeight: "bold",
  fontSize: "53px",
  color: "#2e1055",
};

const Good1 = {
  fontSize: "53px"
};
  
const main_text_2 = {
  fontSize: "20px",
  fontWeight: "400"
};

function Search() {
  return (
    <>
      <div className="view">
        <div className="container">
          <div className="row height d-flex justify-content-center align-items-center">
            <div className="col-md-8 mb-5">
              <div className="main_text">
                <div className="main_text_1 text-center"><span className="Good" style={Good1}>GOOD </span><span className="food" style={food}>FOOD</span></div>
                <p className="text-center text-white" style={main_text_2}>Get rid with everyday boring meal. Now, Order your best food from your best resturants with special discount and offers.</p>
              </div>
              <div className="search">
                {" "}
                <FontAwesomeIcon icon={faSearch} />{" "}
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                />{" "}
                <label htmlFor="Search" className="form_label">Search what you want to Eat!</label>
                <button className="btn btn-sm btn-success button_2">Search</button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
