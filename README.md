# Pokedex Web App

## Este projeto é uma aplicação web de uma Pokedex interativa, desenvolvida com foco em praticar conceitos de autenticação, banco de dados e consumo de APIs. A aplicação permite que usuários se cadastrem, façam login e, após autenticados, possam buscar informações sobre diferentes Pokémon.

**A aplicação foi construída com as seguintes tecnologias:**

**- Frontend:** HTML, CSS e JavaScript  
**- Backend:** Node.js com Express.js  
**- Banco de Dados:** PostgreSQL  
**- Servidor Local:** XAMPP (usado para levantar o servidor local Apache e PostgreSQL)  

## Funcionalidades

**- Cadastro de Usuário:** Tela de registro para novos usuários com validação de dados.  
**- Login de Usuário:** Tela de login com autenticação segura. Somente usuários registrados podem acessar a Pokedex.  
**- Pokedex:** Página acessível após o login, onde o usuário pode pesquisar por qualquer Pokémon e obter detalhes como nome, tipo, habilidades e estatísticas.  

## Requisitos
**-Node.js:** Versão 14.x ou superior  
**-XAMPP:** Para gerenciar o servidor local e o banco de dados PostgreSQL
**-PostgreSQL:** Para criação das tabelas
**-NPM:** Para instalar as dependências do projeto

## Como Executar o Projeto

1. **Clone o repositório:** git clone https://github.com/victorgirard1/pokedex.git  
2. **Coloque o projeto dentro do diretório:** C:\xampp\htdocs  
3. **Instale as dependências no diretório do projeto, execute no bash:** npm install  
4. **Crie um banco de dados no postgres com a tabela:** CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,           -- ID autoincremental para identificar o usuário
    nome_usuario VARCHAR(50) NOT NULL, -- Nome de usuário (máximo 50 caracteres)
    senha VARCHAR(100) NOT NULL,      -- Senha do usuário (pode armazenar hash da senha)
);  
5. **Na pasta do projeto:** altere o arquivo index.js que está dentro da pasta node e coloque seu usário do postgres, o nome do seu banco de dados, e a sua senha do postgres.  
6. **Iniciar o servidor local:** Inicie o Apache Server para subir o servidor local  
7. **No diretório do projeto execute no bash:** node index.js 