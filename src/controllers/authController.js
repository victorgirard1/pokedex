// src/controllers/authController.js
const pool = require('../db'); // Importa a conexão com o banco de dados
const path = require('path');

const loginPage = (req, res) => {
res.sendFile(path.join(__dirname, '../public/html/login.html'));
};

const processLogin = async (req, res) => {
const { username, password } = req.body;
console.log('Dados recebidos:', { username, password });

try {
    const result = await pool.query(
    'SELECT * FROM usuarios WHERE nome_usuario = $1 AND senha = $2',
    [username, password]
    );

    if (result.rows.length > 0) {
            res.redirect('/html/home.html'); // Redireciona para a página 'home.html' dentro da pasta 'public/html'
    } else {
            res.redirect('/html/login.html?error=Usuário ou senha inválidos.');
}
    } catch (err) {
    console.error('Erro ao consultar o banco de dados', err);
    res.status(500).send('Erro ao processar o login.');
    }
};

module.exports = {
    loginPage,
    processLogin,
};
