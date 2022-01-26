import React from "react";
import Slider from "react-slick";
import PropTypes from 'prop-types';
import GetOederItem from "./GetOederItem";

function GetOrder (props) {
   
    const settings = {
      className: "center",
      dots: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
        <div className="container">
          <h2 className="pb-2 border-bottom">Top Listed Food Bar</h2>
          <Slider {...settings}>
             <GetOederItem></GetOederItem>
             <GetOederItem></GetOederItem>
             <GetOederItem></GetOederItem>
             <GetOederItem></GetOederItem>
             <GetOederItem></GetOederItem>
             <GetOederItem></GetOederItem>
          </Slider>
        </div>
      </>
    );
}

GetOrder.propTypes = {
  nameofResturant: PropTypes.string, 
  logo: PropTypes.string,
  nameofLocation: PropTypes.string,
  Opened: PropTypes.string,
  closed: PropTypes.string
}
export default GetOrder;