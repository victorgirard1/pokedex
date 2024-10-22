# 4Poke Web App

## O 4Poke é uma aplicação web com uma Pokédex interativa, desenvolvida com foco em praticar conceitos de autenticação, banco de dados e consumo de APIs. A aplicação conta com uma página inicial informativa, e permite que usuários se cadastrem, façam login e, após autenticados, possam buscar informações sobre diferentes Pokémon na Pokédex.

## A aplicação foi construída com as seguintes tecnologias  

- **Front-end:**  
\- HTML5, CSS3 e JavaScript  

- **Back-end:**  
\- Node.js para fornecer o ambiente de execução para o servidor.  
\- Framework Express para facilitar a criação de rotas e o gerenciamento de requisições e respostas, servindo arquivos estáticos e manipulando dados de formulários.  
\- O pacote Node-Postgres (pg) para permitir a comunicação com o banco de dados PostgreSQL, realizando consultas e manipulando dados persistentes.  
\- NPM (Node Package Manager) é o gerenciador de pacotes padrão para o ambiente de execução Node.js para instalar as dependências do projeto (express, pg).  

- **Banco de Dados:**  
\- PostgreSQL para fornecer a estrutura e as ferramentas necessárias para armazenar, acessar e manipular os dados da sua aplicação de forma eficiente e segura.

## Funcionalidades  

- **Tela de Início:** Página com algumas informações úteis de pokémons. 
- **Cadastro de Usuário:** Página de registro para novos usuários com validação de dados.  
- **Login de Usuário:** Página de login com autenticação segura utilizando algoritmo hash sha-256. Somente usuários registrados podem acessar a Pokedex.  
- **Pokedex:** Página acessível após o login, onde o usuário pode pesquisar por qualquer Pokémon e obter detalhes como nome, tipo, habilidades e estatísticas.  

## Como Executar o Projeto
### Siga os passos abaixo para configurar e rodar o projeto em sua máquina local:

1. **Clone o repositório:** git clone https://github.com/victorgirard1/pokedex.git  
2. **Instalar as dependências:** No diretório raíz do projeto, execute o seguinte comando para instalar todas as dependências que estão no package.json: npm install    
3. **Criar o banco de dados(teste):** No PostgreSQL, crie o banco de dados e a tabela de usuários com a seguinte estrutura SQL:    
CREATE TABLE usuarios (  
id SERIAL PRIMARY KEY,           -- ID autoincremental para identificar o usuário  
nome_usuario VARCHAR(50) NOT NULL, -- Nome de usuário (máximo 50 caracteres)  
senha VARCHAR(100) NOT NULL,      -- Senha do usuário (pode armazenar hash da senha)  
);  
4. **Configurar o arquivo de conexão:** No diretório raíz do projeto abra o arquivo index.js, e altere os dados de conexão com o PostgreSQL. Adicione seu usuário, senha e nome do banco de dados PostgreSQL. 
5. **No diretório raíz do projeto, execute o seguinte comando para iniciar o servidor Node.js**: node index.js  
6. **Colocar no browser:** http://localhost:3000/login
