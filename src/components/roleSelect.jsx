/* eslint-disable */
import React, { useState } from "react";
import "../styles/roleSelect.css";

// Import the signup components
import RenterSignUp from "./renterSignUp";
import LandLordSignUp from "./landLordSignUp";

const RoleSelect = () => {
  // State to track the selected role
  const [selectedRole, setSelectedRole] = useState(null);

  // Function to handle button clicks
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  // Render the selected component
  if (selectedRole === "renter") {
    return <RenterSignUp />;
  } else if (selectedRole === "landlord") {
    return <LandLordSignUp />;
  }

  // Default Role Select UI
  return (
    <div className="roleSelectContainer">
      <div className="role-select">
        <div className="image-container">
          <img
            src="/images/kars.jpg"
            alt="Background house"
            className="background-image"
          />
        </div>
        <div className="sel-text">
          <h2>Get Started</h2>
          <p>
            Are you a renter looking for a home or a landlord listing a
            property?
          </p>
          <div className="button-group">
            <button
              className="role-button renter"
              onClick={() => handleRoleSelect("renter")}
            >
              I'm a Renter
            </button>
            <button
              className="role-button landlord"
              onClick={() => handleRoleSelect("landlord")}
            >
              I'm a Landlord
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelect;
