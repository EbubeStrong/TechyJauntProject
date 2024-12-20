import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landLordSignUp.css";
import LoginForm from "./loginForm";
import PasswordInput from "./passwordInput";

const RenterSignUp = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    nationality: "",
    gender: "",
    occupation: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState({});
  const [showLogin, setShowLogin] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (!formData.nationality)
      newErrors.nationality = "Nationality is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.occupation) newErrors.occupation = "Occupation is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Sign Up button click
  const handleSignUp = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Navigate to the HomePage
      navigate("/home");
    }
  };

  return (
    <div className="sign-up">
      <div className="landlord-sign-up">
        <div className="welcome-txt">
          <h3>Welcome, Find Your Perfect Home!</h3>
          <p>
            Sign up to browse thousands of apartments tailored to your needs
          </p>
        </div>

        <form method="post" className="sign-up-form">
          <div className="label-container">
            <div className="label-input">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="biz"
              />
              <br />

              {errors.fullName && (
                <p className="error-text">{errors.fullName}</p>
              )}
            </div>
            <div className="label-input">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="name"
              />
              <br />
              {errors.phoneNumber && (
                <p className="error-text">{errors.phoneNumber}</p>
              )}
            </div>
          </div>

          <div className="label-container">
            <div className="label-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="email"
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <PasswordInput
              value={formData.password}
              onChange={(password) => setFormData({ ...formData, password })}
            />
            <br />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <div className="label-container">
            <div className="label-input">
              <label htmlFor="nationality">Nationality</label>
              <select
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                className="nationality"
              >
                <option value=""></option>
                <option value="nig">Nigeria</option>
                <option value="gh">Ghana</option>
                <option value="kenya">Kenya</option>
                <option value="Cam">Cameroon</option>
                <option value="SA">South Africa</option>
                <option value="togo">Togo</option>
              </select>
              <br />
              {errors.nationality && (
                <p className="error-text">{errors.nationality}</p>
              )}
            </div>
            <div className="label-input">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="gender"
              >
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <br />
              {errors.gender && <p className="error-text">{errors.gender}</p>}
            </div>
          </div>

          <div className="label-container">
            <div className="label-input">
              <label htmlFor="occupation">Occupation</label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
                className="occupation"
              />
              <br />
              {errors.occupation && (
                <p className="error-text">{errors.occupation}</p>
              )}
            </div>
          </div>

          <button className="sign-up-btn" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>

        <div className="other-options">
          <div className="apple">
            <a href="#">Sign in with Apple ID</a>
          </div>
          <div className="Google">
            <a href="#">Sign in with Google</a>
          </div>
          <div className="Facebook">
            <a href="#">Sign in with Facebook</a>
          </div>
        </div>

        <div className="sign-in-prompt">
          <p>
            Already have an account?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowLogin(true);
              }}
            >
              Sign in
            </a>
          </p>
        </div>
      </div>

      {showLogin && (
        <div className="login-popup">
          <div className="login-popup-content no">
            <button
              className="close-button"
              onClick={() => setShowLogin(false)}
            >
              X
            </button>
            <LoginForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default RenterSignUp;
