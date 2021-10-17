import React from 'react';

const Expart = ({expert}) => {
    const {expertize, name, img} =  expert;
    return (
        <div className='col-lg-4 col-small-6 col-12'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-success">{expertize}</h5>
        </div>
    );
};

export default Expart;