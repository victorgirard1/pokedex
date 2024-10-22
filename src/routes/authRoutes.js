// src/routes/authRoutes.js
const express = require('express');
const { loginPage, processLogin } = require('../controllers/authController');

const router = express.Router();

// Rota para página de login
router.get('/login', loginPage);

// Rota para processar o login
router.post('/login', processLogin);

module.exports = router;
