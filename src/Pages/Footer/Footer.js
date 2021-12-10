import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='f'>
            <div>
            <nav className="menu-bar2">
            <div className="menu-list2">
                <h2><span style={{fontWeight:'900',color:'rgb(150, 137, 137)', fontSize:"55px"}}>Genius</span><span style={{color:"rgb(45, 76, 78)"}}>  Car Mechanics</span></h2>
            </div>
        </nav>
            </div>
            <div style={{ textAlign:"center"}}>
                <hr />
                <p><small style={{color:'white'}}>Copyright By@Israt Zahan Sathi - 2021</small></p>
            </div>
        </div>
        </div>
    );
};

export default Footer;