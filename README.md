
# Portfolio: Landing page com Node.js

<h3 align="center">
  Projeto de Landing page, com área administrativa, para gestão e envio de e-mails feito com Node.Js
</h3>

<p align="center">
  <a href="#Resources">Recursos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#Requisites">Pré-requisitos</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#Run">Configurações</a>&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
 <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="PRs welcome!" />
 <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
 <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="PRs welcome!" />
 <img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white" />
</p>
<p align="center">
 <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<a id="Resources"></a>
## Recursos

- [x] Cadastro de e-mails de leads;
- [x] Área administrativa;
- [x] Gráficos com exibição de dias com maior número de cadastros;
- [x] Criação de grupos para envio de e-mails;
- [x] Envio de e-mails para grupos;
- [x] Edição e exclusão de contatos de lista de e-mail;
- [x] Simples integração com gmail.

<a id="Requisites"></a>
## Pré-equisites

Antes de usar esse app, você precisa ter instalado em seu computador:

- Git;
- Node.Js;
- NPM;
- MySQL; 

<a id="Run"></a>
## Run sinapi-bot app

```bash
# Clone this repo
$ git clone https://github.com/dbastosdev/sinapi-bot.git

# Config the bot-scrap.js with the link for scrap if you need use a different link. Its set for RJ;
# Config e-mail smtp. See more details in https://nodemailer.com/usage/using-gmail/

# Access and open the sinapi-bot folder
$ cd sinapi-bot

# Install dependencies
$ npm install

# Execute this application
$ node bot-mail.js
```

Coded with much ☕ by <a href="https://github.com/dbastosdev">dbastos.dev</a> 
