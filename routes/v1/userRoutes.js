const express = require('express');
const { createTenantHandler, createLandlordHandler, verifyEmail, loginUserHandler } = require('../../controllers/v1/userController');
const router = express.Router();

// Route for Tenant signup
router.post('/register/tenant', (req, res) => {
  req.body.role = 'tenant';
  createTenantHandler(req, res);
});

// Route for Landlord signup
router.post('/register/landlord', (req, res) => {
  req.body.role = 'landlord';
  createLandlordHandler(req, res);
});

// Route for Email verification
router.get('/verify-email', verifyEmail);

// Route for Loggin in to User account
router.post('/login', loginUserHandler);


module.exports = router;