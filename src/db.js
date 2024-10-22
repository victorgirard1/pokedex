// src/db.js
const { Pool } = require('pg');

// Configurar o Pool para o PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'teste',
  password: '78',
  port: 5432,
});

module.exports = pool;
