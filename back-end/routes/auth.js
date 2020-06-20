const express = require('express');

const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

// Route to check that the user is authenticated
router.post(
  '/',
  [
    check('email').isEmail().withMessage('Email must be valid'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
  ],
  authController.userAuthentication
);

module.exports = router;
