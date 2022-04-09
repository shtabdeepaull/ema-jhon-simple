import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='form-container'>
            <div>
            <h1 className="form-title">Sing Up</h1>
            <form >
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" required/>
            </div>
            <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" name="confirm-password" id="" required />
            </div>
            <input className='form-submit' type="submit" value="Sign Up" />
            </form>Already have an account? <Link className='form-link' to="/login">Please Login</Link>
            <p>

            </p>
            </div>
        </div>
    );
};

export default SignUp;