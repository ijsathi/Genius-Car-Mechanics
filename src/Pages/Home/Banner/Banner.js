// import { Carousel } from 'bootstrap';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../../../images/banner/banner1.jpg';
import pic2 from '../../../images/banner/banner2.jpg';
import pic3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    return (
        <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Model Mechanic</h3>
          <p>Arthur Bishop is widely regarded as the best contract killer in the business. When his mentor Harry is murdered, Bishop vows to take revenge while teaching Harry's son the tricks of the trade.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Model Mechanic</h3>
          <p>Arthur Bishop is widely regarded as the best contract killer in the business. When his mentor Harry is murdered, Bishop vows to take revenge while teaching Harry's son the tricks of the trade.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Model Mechanic</h3>
          <p>
          Arthur Bishop is widely regarded as the best contract killer in the business. When his mentor Harry is murdered, Bishop vows to take revenge while teaching Harry's son the tricks of the trade.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    );
};

export default Banner;