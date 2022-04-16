import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shipment = () => {
    const [email , setEmail] =useState('');
    const [name , setName] =useState('');
    const [address, setAddress] =useState('');
    const [phone, setPhone] =useState('');
    const [error,setError] =useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleEmailBlur =  event => {
        setEmail(event.target.value);
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhonedBlur = event =>{
        setPhone(event.target.value);
    }


    const handleCreateUser = event =>{
        event.preventDefault();
       
        }
       
    return (
        <div className='form-container'>
        <div>
        <h1 className="form-title">Shipping Information</h1>
        <form onSubmit={handleCreateUser}>
        <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input onBlur={handleNameBlur} type="text" name="name" id="" required />
        </div>
        <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
        </div>
        <div className="input-group">
            <label htmlFor="password">Address</label>
            <input onBlur={handleAddressBlur} type="text" name="address" id="" required/>
        </div>
        <div className="input-group">
            <label htmlFor="confirm password">Phone Number</label>
            <input onBlur={handlePhonedBlur} type="password" name="confirm-password" id="" required/>
        </div>
        <p style={{color:'red'}}>{error}</p>
        <p><input className='form-submit' type="submit" value="Add Shipping" /></p>
        </form>
        </div>
    </div>
    );
};

export default Shipment;