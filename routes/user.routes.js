const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller')

router.post('/auth/register', UserController.userRegister);
router.post('/auth/login', UserController.userLogin);
router.get('auth/user', UserController.userData);

module.exports = router;