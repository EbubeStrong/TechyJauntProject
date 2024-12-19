import React from "react";
import "../styles/landLordSignUp.css";

const LandLord = () => {
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
              <label htmlFor="biz">Business Name</label>
              <input type="text" className="biz" />
            </div>
            {/* </div> */}

            {/* <div className="name-container"> */}
            <div className="label-input">
              <label htmlFor="name">Full Name</label>
              <input type="text" className="name" />
            </div>
          </div>

          <div className="label-container">
            <div className="label-input">
              <label htmlFor="number">Phone Number</label>
              <input type="number" className="number" />
            </div>
            {/* </div> */}

            {/* <div className="email-container"> */}
            <div className="label-input">
              <label htmlFor="email">Email</label>
              <input type="email" className="email" />
            </div>
          </div>

          <div className="label-container">
            <div className="label-input">
              <label htmlFor="password">Password</label>
              <input type="password" className="password" name="password" />

              <svg
                className="eyecon-see"
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.1614 8.05311C13.1614 9.79911 11.7454 11.2141 9.99938 11.2141C8.25338 11.2141 6.83838 9.79911 6.83838 8.05311C6.83838 6.30611 8.25338 4.89111 9.99938 4.89111C11.7454 4.89111 13.1614 6.30611 13.1614 8.05311Z"
                  stroke="#130F26"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.998 15.355C13.806 15.355 17.289 12.617 19.25 8.05298C17.289 3.48898 13.806 0.750977 9.998 0.750977H10.002C6.194 0.750977 2.711 3.48898 0.75 8.05298C2.711 12.617 6.194 15.355 10.002 15.355H9.998Z"
                  stroke="#130F26"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                className="eyecon-hide"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.76045 14.3667C9.18545 13.7927 8.83545 13.0127 8.83545 12.1377C8.83545 10.3847 10.2474 8.97168 11.9994 8.97168C12.8664 8.97168 13.6644 9.32268 14.2294 9.89668"
                  stroke="#130F26"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.1049 12.6987C14.8729 13.9887 13.8569 15.0067 12.5679 15.2407"
                  stroke="#130F26"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.65451 17.4722C5.06751 16.2262 3.72351 14.4062 2.74951 12.1372C3.73351 9.85823 5.08651 8.02823 6.68351 6.77223C8.27051 5.51623 10.1015 4.83423 11.9995 4.83423C13.9085 4.83423 15.7385 5.52623 17.3355 6.79123"
                  stroke="#130F26"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.4473 8.99072C20.1353 9.90472 20.7403 10.9597 21.2493 12.1367C19.2823 16.6937 15.8063 19.4387 11.9993 19.4387C11.1363 19.4387 10.2853 19.2987 9.46729 19.0257"
                  stroke="#130F26"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.8868 4.24951L4.11279 20.0235"
                  stroke="#130F26"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="label-container">
            {/* <div className="nationality-container"> */}
            <div className="label-input">
              <label htmlFor="nationality">Nationality</label>
              <select name="nationality" className="nationality">
                <option value=""></option>
                <option value="nig">Nigeria</option>
                <option value="gh">Ghana</option>
                <option value="kenya">Kenya</option>
                <option value="Cam">Cameroon</option>
                <option value="SA">South Africa</option>
                <option value="togo">Togo</option>
              </select>
            </div>
            {/* </div> */}

            {/* <div className="gender-container"> */}
            <div className="label-input">
              <label htmlFor="gender">Gender</label>
              <select name="gender" className="gender">
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>

          <div className="label-container">
            {/* <div className="occupation-container"> */}
            <div className="label-input">
              <label htmlFor="occupation">Occupation</label>
              <input type="text" className="occupation" />
            </div>
            {/* </div> */}
          </div>

          <a className="sign-up-btn" href="#">
            Sign Up
          </a>
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
            Already have an account? <a href="#">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandLord;
