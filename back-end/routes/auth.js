const express = require('express');

const router = express.Router();
// const { check } = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middlewares/auth');

// Route to check that the user is authenticated
router.post(
  '/',
  /*   [
    check('email').isEmail().withMessage('Email must be valid'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
  ], */
  authController.userAuthentication
);

// Route get
router.get('/', auth, authController.autheticadedUser);

module.exports = router;
