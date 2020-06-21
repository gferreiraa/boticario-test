const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// eslint-disable-next-line consistent-return
exports.createUser = async (req, res) => {
  // Check of request errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Get information from the request body
  const { email, password } = req.body;

  // Checks if the user already exists
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Creates a new user with request data
    user = new User(req.body);

    // Generate a hash for the user's created password
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(password, salt);

    // Save user created
    await user.save();

    // Payload data expected by JsonWebToken
    const payload = {
      user: {
        id: user.id,
      },
    };

    // JsonWebToken configuration
    jwt.sign(
      payload,
      process.env.CODE,
      {
        expiresIn: 3600,
      },
      (error, token) => {
        if (error) throw error;
        res.json({ token });
      }
    );
  } catch (error) {
    // console.log(error);
    res.status(400).send('Request error');
  }
};
