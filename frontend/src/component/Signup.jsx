import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: '',
        gender: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = (e) => {
        e.preventDefault();
        // Validate and handle signup logic
        console.log(formData);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow border-radius-20">
                        <div className="text-center mb-4 p-3" style={{ backgroundColor: '#ED3636' }}>
                            <h2 className="text-white">Sign Up</h2>
                        </div>
                        <form onSubmit={handleSignup} className="p-4">
                            <div className="form-group mb-3">
                                <label style={{color:'#6B779A'}}>Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label style={{color:'#6B779A'}}>Mobile Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label style={{color:'#6B779A'}}>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label style={{color:'#6B779A'}}>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label style={{color:'#6B779A'}}>Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label style={{color:'#6B779A'}}>Age</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/* Updated Gender Section */}
                            <div className="form-group mb-3">
    <label style={{color:'#6B779A'}}>Gender</label> <br />
    <div className="btn-group d-flex justify-content-evenly" role="group" aria-label="Gender toggle button group" >
        <input
            type="radio"
            className="btn-check"
            name="gender"
            id="male"
            value="Male"
            onChange={handleChange}
            checked={formData.gender === 'Male'}
            required
        />
        <label 
            className="btn" 
            htmlFor="male" 
            style={{
                width: '30px', 
                height: '50px', 
                backgroundColor: '#ED3636', 
                borderRadius: '10px',
                color: 'white',
                fontWeight: 'bold',
                opacity: 1, // Ensure it is visible
            }}>
            Male
        </label>

        <input
            type="radio"
            className="btn-check"
            name="gender"
            id="female"
            value="Female"
            onChange={handleChange}
            checked={formData.gender === 'Female'}
        />
        <label 
            className="btn" 
            htmlFor="female" 
            style={{
                width: '30px', 
                height: '50px', 
                marginLeft: '20px',
                backgroundColor: '#6B779A0D', 
                borderRadius: '10px',
                color: 'black',
                opacity: 1,
            }}>
            Female
        </label>

        <input
            type="radio"
            className="btn-check"
            name="gender"
            id="other"
            value="Other"
            onChange={handleChange}
            checked={formData.gender === 'Other'}
        />
        <label 
            className="btn" 
            htmlFor="other" 
            style={{
                width: '30px', 
                height: '50px', 
                marginLeft: '20px',
                backgroundColor: '#6B779A0D', 
                borderRadius: '10px',
                color: 'black',
                opacity: 1,
            }}>
            Other
        </label>
    </div>
</div>

                            <div className="form-group mb-3">
                            <div className="form-check">
    <input 
        className="form-check-input" 
        type="checkbox" 
        id="termsCheck"
        required 
        style={{
            accentColor: '#EE5007', // This will apply the custom color
            width: '18px',           // Customize size if needed
            height: '18px',
            borderColor: '#EE5007',  // This sets the border color
        }}
    />
    <label 
        className="form-check-label" 
        htmlFor="termsCheck" 
        style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '21px',
            letterSpacing: '-0.02em',
            textAlign: 'left',
        }}
    >
        Accept Terms and Conditions
    </label>
</div>

                            </div>
                            <button type="submit" className="btn btn-primary w-100 mb-3" style={{
                                backgroundColor: '#ED3636',
                                height:'60px',
                                borderRadius: '20px',
                                fontFamily: 'Poppins',
                                fontWeight: '600',
                                fontSize: '18px',
                                lineHeight: '27px'
                            }}>
                                Sign up
                            </button>
                            <p className="text-center">
                                Already have an account? &nbsp;
                                <a href="/login" style={{
                                    color: '#9C724B',
                                    fontFamily: 'Poppins',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    lineHeight: '24px',
                                    textAlign: 'right',
                                    textDecoration: 'none'
                                }}>
                                    Login
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
