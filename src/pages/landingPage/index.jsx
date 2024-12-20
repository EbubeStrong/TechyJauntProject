/* eslint-disable */
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import RoleSelect from "../../components/roleSelect";
import LoginForm from "../../components/loginForm";
import "./styles/landingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract current pop-up route (e.g., "signup" or "login")
  const isSignUp = location.pathname === "/signup";
  const isLogin = location.pathname === "/login";

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleClosePopups = () => {
    navigate("/");
  };

  return (
    <div className={`content ${isSignUp || isLogin ? "blur" : ""}`}>
      <div className="header">
        <div className="header-container">
          <div className="logo">
            <img src="./images/logo.png" alt="logo" />
            <span>Dwella</span>
          </div>
          <div className="btns">
            <button onClick={handleSignUpClick}>Sign Up</button>
            <button onClick={handleLoginClick}>Log In</button>
          </div>
        </div>
      </div>

      <div className="main">
        <section className="hero">
          <div className="hero-text">
            <h1>
              Find your perfect <br />
              apartment with ease
            </h1>
            <p>
              Find the best apartment you want by your location or <br />{" "}
              neighbourhood
            </p>
            <button onClick={handleSignUpClick}>Get Started</button>
          </div>
        </section>

        {/* Render RoleSelect or LoginForm based on the route */}
        {(isSignUp || isLogin) && (
          <>
            <div className="content-blur" />
            <div className="modal-content ">
              <button className="close-button" onClick={handleClosePopups}>
                X
              </button>
              {isSignUp && <RoleSelect />}
              {isLogin && <LoginForm />}
            </div>
          </>
        )}

        <section className="explore-section container">
          <div className="explore">
            <div className="explore-text">
              <h2>
                "Explore Affordable Rentals <br />
                Across Nigeria"
              </h2>
              <p>
                Find Apartments, Self-Contain, Shortlets, Flat And <br />
                Houses for rent in Nigeria
              </p>
            </div>
            <div className="explore-image">
              <img src="./images/explore-image.png" alt="explore-image" />
            </div>
          </div>
          <div className="image">
            <img src="./images/explore-image-3.png" alt="explore-image-2" />
          </div>
        </section>

        <section className="choice-section container">
          <div className="choice-container">
            <div className="choice-text">
              <h2>Why Should I Choose Dwella?</h2>
              <p>
                Find the best apartment you want by your location or
                neighbourhood
              </p>
            </div>
            <div className="choice-wrapper">
              <div className="choice">
                <div className="choice-image">
                  <img src="./images/star.png" alt="choice-image" />
                </div>
                <h3>Apartment Matching Algorithm</h3>
                <p>
                  Get personalized rental recommendations with our smart
                  algorithm that matches apartments to your unique preferences.
                </p>
              </div>
              <div className="choice">
                <div className="choice-image">
                  <img src="./images/message.png" alt="choice-image" />
                </div>
                <h3>Advanced Search Filters</h3>
                <p>
                  Refine your search with a range of detailed filters, including
                  location, budget, number of rooms, and amenities, ensuring you
                  find the perfect property faster.
                </p>
              </div>
              <div className="choice">
                <div className="choice-image">
                  <img src="./images/search.png" alt="choice-image" />
                </div>
                <h3>
                  Direct communication with <br />
                  property managers and Landlords
                </h3>
                <p>
                  Connect directly with landlords and property managers for
                  faster communication and trusted deals—no middleman involved.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="get-started container">
          <h4>Ready to Find Your Dream Home?</h4>
          <p>
            Join thousands of renters and landlords simplifying their
            <br />
            journey. Sign up now to start your hassle-free search!
          </p>
          <button onClick={handleSignUpClick}>Get Started</button>
        </section>
      </div>

      <div className="footer">
        <div className="footer-container">
          <p>Follow us on:</p>
          <div className="icons">
            <div className="icon">
              <FaFacebookF size={20} />
            </div>
            <div className="icon">
              <FaInstagram size={20} />
            </div>
            <div className="icon">
              <FaTwitter size={20} />
            </div>
          </div>
          <div className="nav-links">
            <ul>
              <li>About</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="copyright">
            <p>&copy; 2024 Dwella. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
