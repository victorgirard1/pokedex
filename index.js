const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;
const path = require('path');


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'teste',
  password: '78',
  port: 5432,
});


app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/login.html'));
});


app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('Dados recebidos:', { username, password });
  
  try {

    const result = await pool.query(
      'SELECT * FROM usuarios WHERE nome_usuario = $1 AND senha = $2', 
      [username, password]
    );

    if (result.rows.length > 0) {
      res.redirect('http://localhost/pokedex/public/html/index.html')
    } else {
      res.send('Usuário ou senha inválidos.');
    }
  } catch (err) {
    console.error('Erro ao consultar o banco de dados', err);
    res.status(500).send('Erro ao processar o login.');
  }
});

app.listen(port, () => {
  console.log('Servidor rodando em http://localhost:${port}');
});