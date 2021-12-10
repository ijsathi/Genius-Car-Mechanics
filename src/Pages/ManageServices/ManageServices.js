import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('https://quiet-shore-35361.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    const handleDelete = id =>{
        const url = `https://quiet-shore-35361.herokuapp.com/services/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
                alert('Deleted Successfully');
            }
            
        })
    }
    return (
        <div>
            <h1>Manage All Service</h1>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;