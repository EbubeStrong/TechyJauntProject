import React, { useState } from "react";

const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="label-input">
      <label htmlFor="password">Password</label>
      <div className="password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          className="password"
          name="password"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <svg
          className={showPassword ? "eyecon-hide" : "eyecon-see"}
          onClick={() => setShowPassword(!showPassword)}
          width={showPassword ? "24" : "20"}
          height={showPassword ? "24" : "17"}
          viewBox={showPassword ? "0 0 24 24" : "0 0 20 17"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {showPassword ? (
            <>
              {/* Eyecon-hide paths */}
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
            </>
          ) : (
            <>
              {/* Eyecon-see paths */}
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
            </>
          )}
        </svg>
      </div>
    </div>
  );
};

export default PasswordInput;
