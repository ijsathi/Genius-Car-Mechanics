import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1>Book Done!  Booking no. 0{serviceId}</h1>
        </div>
    );
};

export default Booking;