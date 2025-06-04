import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <div className="breadcrumb">
                <div className="breadcrumb-content">
                    <h1>Login</h1>
                    <div className="breadcrumb-path">
                        <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</span>
                        <span className="separator">&gt;&gt;</span>
                        <span className="current">Login</span>
                    </div>
                </div>
            </div>
            <div className="registration-container">
                <div className="registration-box">
                    <h2>Login</h2>
                    <p className="subtitle">Welcome back! Please login to your account</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email*</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password*</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button type="submit" className="register-button">Login</button>
                    </form>
                    <div className="login-link">
                        Don't have an account? <span onClick={() => navigate('/register')}>Register</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
