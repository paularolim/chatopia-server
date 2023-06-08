# Chatopia - Server

Este repositório contém um servidor de chat desenvolvido em Node.js. O objetivo principal é fornecer uma base sólida para a implementação de um sistema de chat em tempo real.

## Tecnologias

Este projeto utiliza as seguintes tecnologias:

- Node.js
- Express.js
- Firebase Authenticator

## Funcionalidades

- **Cadastro com e-mail e senha**: o servidor está configurado para permitir que os usuários façam cadatro com e-mail e senha.

- **Login com e-mail e senha**: o servidor está configurado para permitir que os usuários façam login com e-mail e senha e obtenham um token de autenticação.

## Endpoints

Para ver os endpoints disponivéis, acesse a [documentação](docs/ENDPOINTS.md).

## Pré-requisitos

Para rodar o projeto no seu computador é necessário ter algumas ferramentas instaladas:

- Node v16.16
- Yarn v1.22

## Configuração

Antes de executar o servidor, é necessário realizar algumas configurações:

1. Clone este repositório.
2. Crie um projeto no [Firebase](https://console.firebase.google.com/) e ative o Firebase Authentication.
3. No diretório raiz do projeto, crie um arquivo .env com as variáveis de ambiente (existe um exemplo no arquivo `.env-example`).
4. Instale as dependências do projeto executando o comando `yarn install`.
5. Inicie o servidor em modo de desenvolvimento com o comando `yarn dev`.

## Contribuição

Contribuições são bem-vindas! Se você gostaria de adicionar novas funcionalidades, corrigir bugs ou melhorar o código existente, fique à vontade para abrir uma solicitação de pull. Certifique-se de seguir as diretrizes de contribuição do projeto.
