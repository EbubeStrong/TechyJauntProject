const bcrypt = require('bcrypt');
const config = require('../../config/config');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const sendGmail = require('../../utils/email');


const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

// @desc POST Creates User: Tenant
// @route POST /v1/users/register/tenant
// @access Public
const createTenantHandler = async (req, res) => {
  try {
    let { name, phoneNumber, occupation, gender, email, password, role, businessName } = req.body;
    const lowerCaseGender = gender.toLowerCase();

    if (!name || !phoneNumber || !occupation || !gender || !email || !password || !role) {
      return res.status(400).json({
        message: 'All fields are required',
      });
    }

    if (typeof name !== 'string') {
      return res.status(400).json({
        message: 'Name must be a string',
      });
    }

    if (typeof occupation !== 'string') {
      return res.status(400).json({
        message: 'Occupation must be a string',
      });
    }

    if (typeof gender !== 'string') {
      return res.status(400).json({
        message: 'Gender must be a string',
      });
    } else if (lowerCaseGender !== 'male' && lowerCaseGender !== 'female' ) {
      res.status(400).json({ message: 'Gender must be either male or female' });
      return;
    }

    if (typeof email !== 'string') {
      return res.status(400).json({
        message: 'Email must be a string',
      });
    }
    
    if (!validatePassword(password)) {
      return res.status(400).json({
        message: 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
      });
    }

    if (role === 'tenant' && businessName) {
      return res.status(400).json({
        message: 'Tenants cannot set business names',
      })
    }

    if (role === 'tenant' && businessName == '') {
      return res.status(400).json({
        message: 'Tenants cannot set business names',
      })
    }    

    const existingUser = await User.findOne({
      where: {
        email,
      }
    });

    if (existingUser) {
      return res.status(400).json({
        message: 'Email is already in use'
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const emailVerificationToken = jwt.sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

    const user = await User.create({
      name,
      phoneNumber,
      occupation,
      gender,
      email,
      password: hashedPassword,
      role: 'tenant',
      isEmailVerified: false,
      emailVerificationToken
    });

    sendGmail(email, emailVerificationToken);

    return res.status(201).json({
      message: 'Signup succesful, please check your email for verification',
      id: user.id,
      name: user.name,
      phoneNumber: user.phoneNumber,
      occupation: user.occupation,
      gender: user.gender,
      email: user.email,
      role: user.role,
    })

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}


// @desc POST Creates User: Landlord
// @route POST /v1/users/register/landlord
// @access Public
const createLandlordHandler = async (req, res) => {
  try {
    let { name, phoneNumber, occupation, gender, email, businessName, password, role } = req.body;
    const lowerCaseGender = gender.toLowerCase();

    if (!name || !phoneNumber || !occupation || !gender || !email || !password || !role) {
      return res.status(400).json({
        message: 'All fields except Business Name are required',
      });
    }

    if (typeof name !== 'string') {
      return res.status(400).json({
        message: 'Name must be a string',
      });
    }

    if (typeof occupation !== 'string') {
      return res.status(400).json({
        message: 'Occupation must be a string',
      });
    }

    if (typeof gender !== 'string') {
      return res.status(400).json({
        message: 'Gender must be a string',
      });
    } else if (lowerCaseGender !== 'male' && lowerCaseGender !== 'female' ) {
      res.status(400).json({ message: 'Gender must be either male or female' });
      return;
    }

    if (typeof email !== 'string') {
      return res.status(400).json({
        message: 'Email must be a string',
      });
    }
    
    if (!validatePassword(password)) {
      return res.status(400).json({
        message: 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
      });
    }

    if (role === 'landlord' && businessName === undefined) {
      return res.status(400).json({
        message: 'Business names must either be empty or filled. They can not be undefined',
      })
    }

    const existingUser = await User.findOne({
      where: {
        email,
      }
    });

    if (existingUser) {
      return res.status(400).json({
        message: 'Email is already in use'
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const emailVerificationToken = jwt.sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

    const user = await User.create({
      name,
      phoneNumber,
      occupation,
      gender,
      email,
      businessName,
      password: hashedPassword,
      role: 'landlord',
      isEmailVerified: false,
      emailVerificationToken
    });

    sendGmail(email, emailVerificationToken);

    return res.status(201).json({
      message: 'Signup succesful, please check your email for verification',
      id: user.id,
      name: user.name,
      phoneNumber: user.phoneNumber,
      occupation: user.occupation,
      gender: user.gender,
      email: user.email,
      businessName: user.businessName,
      role: user.role,
    })

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

// @desc GET Verify User Email
// @route GET /v1/users/verify-email:token
// @access Private
const verifyEmail = async (req, res) => {
  const emailVerificationToken = req.query.emailVerificationToken;

  try {

    const payload = jwt.verify(emailVerificationToken, process.env.JWT_SECRET_KEY);
    const email = payload.email;

    const user = await User.findOne({
      where: {
        email,
        emailVerificationToken,
      }
    });

    if (!user) {
      return res.status(404).json({
        message: 'User not found or token is invalid',
      });
    }

    user.isEmailVerified = true;
    user.emailVerificationToken = null;
    await user.save();

    return res.status(200).json({
      message: "✅ Email verified successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

// @desc POST Login User
// @route POST /v1/users/login
// @access Public
const loginUserHandler = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      message: 'Email and password are required',
    })
  }
  
  const user = await User.findOne({ where: { email } })
  if (!user) {
    return res.status(401).json({
      message: 'Invalid email or password',
    });
  }

  if (!user.isEmailVerified) {
    return res.status(401).json({
      message: 'Please verify your email before logging in'
    })
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({
      message: 'Invalid password',
    });
  }

  const payload = {
    id: user.id,
    email: user.email
  };

  const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '3d' });
  
  res.status(200).json({
    message: "Login Successful",
    token,
  });
};



module.exports = {
  createTenantHandler,
  createLandlordHandler,
  verifyEmail,
  loginUserHandler,
}