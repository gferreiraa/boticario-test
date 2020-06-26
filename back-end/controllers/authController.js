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

  // Get information from the request body
  const { email, password } = req.body;

  // Checks whether user exists and data are correct
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Usuário não cadastrado!' });
    }
    const checkPassword = await bcryptjs.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ message: 'Senha incorreta' });
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
    console.log(error);
  }
};

exports.autheticadedUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Error' });
  }
};
