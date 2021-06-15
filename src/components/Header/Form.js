import React from 'react';
import house1 from "./img/house1.jpg";
import house2 from "./img/house2.jpg";
import house3 from "./img/house3.jpg";
import house4 from "./img/nice-house.jpg";
import logo from './img/3D-Mockup.jpg';

export default function Form() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={house1} className="d-block w-100" alt="house1" />
          </div>
          <div className="carousel-item">
            <img src={house2} className="d-block w-100" alt="house2" />
          </div>
          <div className="carousel-item">
            <img src={house3} className="d-block w-100" alt="house3" />
          </div>
          <div className="carousel-item">
            <img src={house4} className="d-block w-100" alt="house4" />
          </div>
          <div className="carousel-item">
            <img src={logo} className="d-block w-100" alt="logo" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}