// src/routes/authRoutes.js
const express = require('express');
const { loginPage, processLogin } = require('../controllers/loginController');
const { processCadastro } = require('../controllers/registerController'); // Atualizado para registerController

const router = express.Router();

// Rota para página de login
router.get('/login', loginPage);

// Rota para processar o login
router.post('/login', processLogin);

// Rota para processar o cadastro
router.post('/cadastro', processCadastro); // Rota para cadastro

module.exports = router;
