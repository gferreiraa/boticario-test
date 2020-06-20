const express = require('express');

const router = express.Router();
const { check } = require('express-validator');
const userController = require('../controllers/userController');

// Create user
// api/users
router.post(
  '/',
  [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Email must be valid'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
    check('cpf')
      .isLength({ min: 11 })
      .withMessage('CPF must be at least 11 characters'),
  ],
  userController.createUser
);

module.exports = router;
