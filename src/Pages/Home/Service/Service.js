import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    // const {service} = props;
    const {name, price, description, img, _id} = service;
    return (
        <div className='service pb-3'>
            <img style={{}} src={img} alt="" />
            <h3>{name}</h3> 
            <h5><i className="fas fa-tags"></i>  {price}</h5>
            <p>{description}</p>
            <Link to={`/booking/${_id}`}>
            <button className="btn btn-success">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;