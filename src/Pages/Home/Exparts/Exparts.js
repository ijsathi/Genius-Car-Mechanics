import React from 'react';

import imgmechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import imgmechanic2 from '../../../images/mechanic/mechanic-2.jpg';
import imgmechanic3 from '../../../images/mechanic/mechanic-3.jpg';
import imgmechanic4 from '../../../images/mechanic/mechanic-4.jpg';
import imgmechanic5 from '../../../images/mechanic/mechanic-5.jpg';
import imgmechanic6 from '../../../images/mechanic/mechanic-3.jpg';
import Expart from '../Expart/Expart';

const exparts = [
    {
        img: imgmechanic1,
        name:"Andrew Smith",
        expertize:'-Engine Expert-'
    },
    {
        img: imgmechanic3,
        name:"Jhon Anderson",
        expertize:'-Polish Expert-'
    },
    {
        img: imgmechanic4,
        name:"Zakaria Smith",
        expertize:'-Coloring Expert-'
    },
    
    {
        img: imgmechanic2,
        name:"Shakib Anderson",
        expertize:'-All rounder Expert-'
    },
    {
        img: imgmechanic5,
        name:"Sinthiya Smith",
        expertize:'-Making Expert-'
    },
    {
        img: imgmechanic6,
        name:"PN Gitam",
        expertize:'-Car Expert-'
    }
]
const Exparts = () => {
    return (
        <div className='container mt-5' id='experts'>
            <h2 className='text-primary '>Our Experts</h2>
            <div className="row mt-5">
                {
                    exparts.map(expert => <Expart
                    key={expert.name}
                    expert={expert}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;