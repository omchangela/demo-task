import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import lineImage from '../assets/Line2.png'; // Adjust path as needed
import googleImage from '../assets/google.png';
import appleImage from '../assets/apple.png';
import facebookImage from '../assets/facebook.png'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {/* Add 'rounded' for border-radius */}
                    <div className="card shadow rounded">
                        <div className="text-center mb-4 p-3" style={{ backgroundColor: '#ED3636' }}>
                            <h2 className="text-white" style={{
                                color: 'white', // Set text color to white
                                fontFamily: 'Poppins', // Set font family
                                fontSize: '24px', // Set font size
                                fontWeight: '600', // Set font weight
                            }}>Login</h2>
                        </div>

                        {/* Add padding inside the form */}
                        <form onSubmit={handleLogin} className="p-4">
                            <div className="form-group mb-3">
                                <label style={{ color: '#6B779A' }}>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder='test@test.com'
                                    style={{ backgroundColor: '#6B779A0D' }} // Set background color using inline styles
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                            </div>
                            <div className="form-group mb-3">
                                <label style={{ color: '#6B779A' }}>Password</label>

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder='********'
                                    style={{ backgroundColor: '#6B779A0D' }}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="d-flex justify-content-end mb-3">
                                <a href="/forgot-password" className="text-decoration-none text-black">Forgot Password?</a>
                            </div>
                            <button
                                type="submit"
                                className="btn w-100 mb-3 rounded-4"
                                style={{
                                    width: '300px',
                                    height: '60px',
                                    backgroundColor: '#ED3636',
                                    opacity: 1, // Set to 1 to make it visible
                                    color: 'white', // Set text color to white
                                    fontFamily: 'Poppins', // Set font family
                                    fontSize: '18px', // Set font size
                                    fontWeight: '600', // Set font weight
                                    lineHeight: '27px', // Set line height
                                    letterSpacing: '-0.3px', // Set letter spacing
                                    textAlign: 'center', // Center align text
                                }}
                            >
                                Login
                            </button>

                            <div className="text-center mb-3 mt-1">
                                <img src={lineImage} alt="Line" style={{ width: '50px', paddingBottom: '5px' }} />
                                &nbsp; Or sign in with &nbsp;
                                <img src={lineImage} alt="Line" style={{ width: '50px', paddingBottom: '5px' }} />
                            </div>


                            <div className="d-flex justify-content-center mb-3">
                                <button type="button" className="btn"><img src={googleImage} alt='Google Image' /></button>
                                <button type="button" className="btn"><img src={facebookImage} alt='Facebook Image' /></button>
                                <button type="button" className="btn"><img src={appleImage} alt='Apple Image' /></button>
                            </div>

                            <p className="text-center">
                                Don't have an account?
                                <span style={{ marginRight: '8px' }}></span>
                                <a
                                    href="/signup"
                                    style={{
                                        color: '#9C724B',
                                        fontFamily: 'Poppins',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        lineHeight: '24px',
                                        textAlign: 'right',
                                        textDecoration: 'none' // Remove underline
                                    }}
                                >
                                    Register Now
                                </a>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
