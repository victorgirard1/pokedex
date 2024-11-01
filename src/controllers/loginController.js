// src/controllers/authController.js
const pool = require('../db'); // Importa a conexão com o banco de dados
const path = require('path');
const { hashPassword } = require('../utils/hashUtil'); // Importe a função de hash (se você tiver uma função para verificar hashes)

const loginPage = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'login.html'));
};

const processLogin = async (req, res) => {
    const { username, password } = req.body;
    console.log('Dados recebidos:', { username, password });

    try {
        // Busca o usuário no banco de dados
        const result = await pool.query('SELECT * FROM usuarios WHERE nome_usuario = $1', [username]);

        if (result.rows.length > 0) {
            const user = result.rows[0];
            // Aqui você deve usar a função que você utiliza para comparar a senha com o hash
            if (user.senha === hashPassword(password)) { // Verifica se a senha hashada bate
                res.redirect('/html/home.html'); // Redireciona para a página 'home.html'
            } else {
                res.redirect('/html/login.html?error=Usuário ou senha inválidos.'); // Se a senha não bate
            }
        } else {
            res.redirect('/html/login.html?error=Usuário ou senha inválidos.'); // Usuário não encontrado
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
