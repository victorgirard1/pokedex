// index.js
const express = require('express');
const path = require('path');
const authRoutes = require('./src/routes/authRoutes'); // Importa as rotas de autenticação

const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para interpretar dados de formulários
app.use(express.urlencoded({ extended: true }));

// Usar as rotas de autenticação
app.use('/', authRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
