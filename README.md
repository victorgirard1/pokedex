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

## Bibliotecas e Frameworks Utilizados
### As bibliotecas já estão listadas no arquivo package.json, bastando executar o comando npm install para instalar todas as dependências:  

**npm install express** (Framework)  
**npm install pg** (Biblioteca)

## Como Executar o Projeto
### Siga os passos abaixo para configurar e rodar o projeto em sua máquina local:

1. **Clone o repositório:** git clone https://github.com/victorgirard1/pokedex.git  
2. **Coloque o projeto dentro do diretório:** C:\xampp\htdocs  
3. **Instalar as dependências:** No diretório do projeto, execute o seguinte comando para instalar todas as dependências: npm install   
4. **Criar o banco de dados(teste):** No PostgreSQL, crie o banco de dados e a tabela de usuários com a seguinte estrutura SQL:    
CREATE TABLE usuarios (  
id SERIAL PRIMARY KEY,           -- ID autoincremental para identificar o usuário  
nome_usuario VARCHAR(50) NOT NULL, -- Nome de usuário (máximo 50 caracteres)  
senha VARCHAR(100) NOT NULL,      -- Senha do usuário (pode armazenar hash da senha)  
);  **e depois insira para teste esse usuario** INSERT INTO usuarios (nome_usuario, senha) VALUES ('usuarioteste', 'senha123');  
5. **Configurar o arquivo de conexão:** No arquivo index.js (localizado na pasta node), altere os dados de conexão com o PostgreSQL. Adicione seu usuário, senha e nome do banco de dados PostgreSQL  
6. **Iniciar o servidor local:** Abra o painel do XAMPP e inicie o Apache para subir o servidor local.  
7. **Rodar o servidor Node.js:** No diretório do projeto, execute o seguinte comando para iniciar o servidor Node.js
8. **Colocar no browser:** http://localhost:3000/login
