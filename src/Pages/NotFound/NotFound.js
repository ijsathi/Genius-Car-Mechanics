import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <img style={{width:'500px'}} src={notFound} alt="" /><br/>
            <Link to='/'><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;