const express = require('express');
const { 
  createTenantHandler, 
  createLandlordHandler, 
  verifyEmailHandler, 
  loginUserHandler,
  passwordResetRequestHandler,
  passwordResetHandler,
} = require('../../controllers/v1/userController');
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
router.get('/verify-email', verifyEmailHandler);

// Route for Logging in to User account
router.post('/login', loginUserHandler);

// Route for Requesting for User password Reset
router.post('/password-reset-request', passwordResetRequestHandler)

// Route for User password Reset
router.post('/password-reset', passwordResetHandler)


module.exports = router;