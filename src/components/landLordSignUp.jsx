import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for redirection
import "../styles/landLordSignUp.css";
import LoginForm from "./loginForm";
import PasswordInput from "./passwordInput";

const LandLord = () => {
  const navigate = useNavigate(); // Initialize navigate for redirection
  const [showLogin, setShowLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // State to hold form inputs
  const [formData, setFormData] = useState({
    biz: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    nationality: "",
    gender: "",
    occupation: "",
  });

  // State for errors
  const [errors, setErrors] = useState({
    biz: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    nationality: "",
    gender: "",
    occupation: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Simple form validation to check if all fields are filled
    for (let field in formData) {
      if (!formData[field]) {
        newErrors[field] = `${field} is required`;
      }
    }

    // Set the errors if any
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Navigate to HomePage after successful form submission
      navigate("/home");
    }
  };

  React.useEffect(() => {
    if (showLogin) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showLogin]);

  return (
    <div className="sign-up">
      <div className="landlord-sign-up">
        <div className="welcome-txt">
          <h3>Welcome, Find Your Perfect Home!</h3>
          <p>
            Sign up to browse thousands of apartments tailored to your needs
          </p>
        </div>
        <form method="post" className="sign-up-form" onSubmit={handleSubmit}>
          <div className="label-container">
            <div className="label-input">
              <label htmlFor="biz">Business Name</label>
              <input
                type="text"
                className="biz"
                name="biz"
                value={formData.biz}
                onChange={handleInputChange}
              />
              {errors.biz && <span className="error">{errors.biz}</span>}
            </div>
            <div className="label-input">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
          </div>

          <div className="label-container">
            <div className="label-input">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                className="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="label-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>

          <div className="label-container">
            {/* PasswordInput component */}
            {/* <PasswordInput
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            /> */}
            <PasswordInput
              value={formData.password}
              onChange={(password) => setFormData({ ...formData, password })}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          <div className="label-container">
            <div className="label-input">
              <label htmlFor="nationality">Nationality</label>
              <select
                name="nationality"
                className="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select Nationality
                </option>
                <option value="nig">Nigeria</option>
                <option value="gh">Ghana</option>
                <option value="kenya">Kenya</option>
                <option value="Cam">Cameroon</option>
                <option value="SA">South Africa</option>
                <option value="togo">Togo</option>
              </select>
              {errors.nationality && (
                <span className="error">{errors.nationality}</span>
              )}
            </div>
            <div className="label-input">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                className="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && <span className="error">{errors.gender}</span>}
            </div>
          </div>

          <div className="label-container">
            <div className="label-input">
              <label htmlFor="occupation">Occupation</label>
              <input
                type="text"
                className="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
              />
              {errors.occupation && (
                <span className="error">{errors.occupation}</span>
              )}
            </div>
          </div>

          <button className="sign-up-btn" type="submit">
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
          <div className="login-popup-content">
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

export default LandLord;
