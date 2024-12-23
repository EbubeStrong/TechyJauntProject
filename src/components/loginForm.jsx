import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast for notifications
import axios from "axios"; // Import axios
import PasswordInput from "./PasswordInput"; // Import the PasswordInput component
import "../styles/login.css";

const LoginForm = () => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all fields correctly.");
      return;
    }

    try {
      const response = await axios.post(
        "https://dwella.onrender.com/v1/users/register/login",
        formData
      );

      // Extract token or user data from the response
      const { token, message } = response.data;

      // Save the token to localStorage
      localStorage.setItem("token", token);

      // Show success toast and navigate
      toast.success(message || "Logged in successfully!");
      navigate("/home");
    } catch (error) {
      // Extract error message from the response
      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";
      console.error("Error during login:", errorMessage);
      toast.error(errorMessage);
    }
  };

  // Validate form inputs
  const validateForm = () => {
    return formData.email && formData.password;
  };

  return (
    <div className="sign-up">
      <div className="landlord-sign-up">
        <div className="welcome-txt">
          <h3>Welcome, Please, Login into Your Account</h3>
        </div>

        <form onSubmit={handleLogin} className="sign-up-form">
          <div className="label-container-2">
            <div className="label-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <PasswordInput
              value={formData.password}
              onChange={(password) => setFormData({ ...formData, password })}
            />
          </div>

          <div className="forget-pwd">
            <div className="forget">
              <a href="#">Forget Password</a>
            </div>

            <div className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
          </div>

          <button type="submit" className="sign-up-btn">
            Login
          </button>
        </form>

        <div className="line-container">
          <div className="line"></div>
          <span>Or</span>
          <div className="line"></div>
        </div>

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
            Already have an account? <a href="#">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
