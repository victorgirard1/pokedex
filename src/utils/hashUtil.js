const CryptoJS = require('crypto-js');

// Texto de entrada para hash
const text = 'Exemplo de texto';

// Gerando o hash SHA-256
const hash = CryptoJS.SHA256(text).toString();

console.log('Hash SHA-256:', hash);
