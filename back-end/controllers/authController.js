const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// eslint-disable-next-line consistent-return
exports.userAuthentication = async (req, res) => {
  // Check of request errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Checks user data in the request
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User does not exists!' });
    }
    const checkPassword = await bcryptjs.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

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
  }
};
