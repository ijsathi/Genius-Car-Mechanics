import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = data =>{
         console.log(data);
         axios.post('http://localhost:5000/services', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('Added successfully');
                reset();
            }
        })
        }
    return (
        <div className='add-service'>
            <h2>Please Added Service</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder='write name' />
      <textarea {...register("description")}placeholder='description' />
      <input type="number" {...register("price")}placeholder='added price' />
      <input {...register("img")}placeholder='image url' />
      <input className='sub' type="submit" />
    </form>
        </div>
    );
};

export default AddService;