// src/controllers/registerController.js
const pool = require('../db'); // Importa a conexão com o banco de dados
const { hashPassword } = require('../utils/hashUtil'); // Importa a função de hash

// Função para processar o cadastro
const processCadastro = async (req, res) => {
    const { username, email, password, 'confirm-password': confirmPassword } = req.body;

    // Valida se as senhas coincidem
    if (password !== confirmPassword) {
        return res.redirect('/html/cadastro.html?error=As senhas não coincidem.');
    }

    try {
        // Verifica se o usuário já existe
        const existingUser = await pool.query('SELECT * FROM usuarios WHERE nome_usuario = $1', [username]);
        if (existingUser.rows.length > 0) {
            return res.redirect('/html/cadastro.html?error=Usuário já existe.');
        }

        // Gera o hash da senha
        const hashedPassword = hashPassword(password);

        // Insere o novo usuário no banco de dados
        await pool.query('INSERT INTO usuarios (nome_usuario, email, senha) VALUES ($1, $2, $3)', [username, email, hashedPassword]);

        return res.redirect('/html/login.html?success=Cadastro realizado com sucesso!'); // Redireciona para a página de login
    } catch (err) {
        console.error('Erro ao cadastrar usuário', err);
        return res.status(500).send('Erro ao processar o cadastro.');
    }
};

module.exports = {
    processCadastro,
};
