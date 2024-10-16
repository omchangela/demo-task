import React, { useState } from 'react';
import './Auth.css'; // Assuming you have an Auth.css file for common styles

const ForgotPass = () => {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    // Handle the reset password logic
    console.log({ email });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card-body shadow" style={{ borderRadius: '20px' }}>
            <div className="text-center mb-4 p-3" style={{ backgroundColor: '#ED3636' }}>
              <h2 className="text-white">Reset Password</h2>
            </div>
            <form onSubmit={handleReset} className="p-4">
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
              <button
                type="submit"
                className="btn w-100 mb-3 rounded-4"
                style={{
                  width: '300px',
                  height: '60px',
                  marginTop: '100px',
                  backgroundColor: '#ED3636',
                  color: 'white',
                  fontFamily: 'Poppins',
                  fontSize: '18px',
                  fontWeight: '600',
                  lineHeight: '27px',
                  textAlign: 'center',
                  letterSpacing: '-0.3px',
                }}
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
