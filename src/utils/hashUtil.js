// src/utils/hashUtil.js
const CryptoJS = require('crypto-js');

// Função para gerar o hash SHA-256
const hashPassword = (password) => {
    return CryptoJS.SHA256(password).toString();
};

module.exports = {
    hashPassword,
};
