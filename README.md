
# Portfolio: Landing page com Node.js

<h3 align="center">
  Projeto de Landing page, com área administrativa, para gestão e envio de e-mails feito com Node.js no padrão MVC
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

<p align="center">
 <img src="https://github.com/dbastosdev/Portfolio-landing-page-nodejs/blob/main/landing-page.gif" />
</p>


<p align="center">
  <img src="https://github.com/dbastosdev/Portfolio-landing-page-nodejs/blob/main/landing.png" width="400"/>
 <img src="https://github.com/dbastosdev/Portfolio-landing-page-nodejs/blob/main/landing-grafico.png" width="425"/>
</p>

<a id="Resources"></a>
## Recursos

- [x] Cadastro de e-mails de leads;
- [x] Área administrativa acessível apenas por login e senha;
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
## Configurações e uso do app Landing Page

Baixe e instale as dependências do projeto: 

```bash
# Clone este repositório através do seu terminal
$ git clone https://github.com/dbastosdev/Portfolio-landing-page-nodejs.git

# Acesse e abra o repositório em seu ambiente
$ cd Portfolio-landing-page-nodejs

# Instale as dependências do projeto
$ npm install
```
Configure as tabelas do banco de dados via terminal, workbench ou outro gerenciador de sua preferência: 

```sql
/* 
Tabela de usuários: 
*/

/* Importante: Não implementei o sistema de cadastro, os usuários administradores do sistema devem ser cadastrados diretamente no banco de dados da aplicação. */

CREATE TABLE `usuarios`.`new_table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);
  
/* 
Tabela de clientes
*/

CREATE TABLE `clientes`.`new_table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  `email` VARCHAR(45) NOT NULL,
  `grupo` VARCHAR(45) NOT NULL,
   `data` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);

```
Configure o arquivo bd.js em dentro de src > database. 

Execute via terminal o projeto: 

```bash
# Execute o projeto
$ npm start
```
Acesse: http://localhost:1234 

Coded with much ☕ by <a href="https://github.com/dbastosdev">dbastos.dev</a> 
