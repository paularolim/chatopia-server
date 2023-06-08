# Endpoints

## Cadastro

Cria uma nova conta de usuário com e-mail e senha.

**Requisição**
`POST /register`

```json
{
  "name": "Any Name",
  "email": "any_email@email.com",
  "password": "any_password"
}
```

**Resposta com sucesso**
`Status: 200 OK`

```json
{
  "id": "any_uuid",
  "email": "any_email@email.com",
  "name": "Any Name"
}
```

**Resposta com erro - e-mail já usado**
`Status: 400 Bad Request`

```json
{
  "error": "The email address is already in use"
}
```

**Resposta com erro - informações faltando**
`Status: 400 Bad Request`

```json
{
  "error": "Missing param: name"
}
```

**Resposta com erro - erro interno**
`Status: 500 Server Error`

```json
{
  "error": "Something went wrong. Please try again later."
}
```

---

## Login

Faz login com e-mail e senha e retorna um token de autenticação.

**Requisição**
`POST /login`

```json
{
  "email": "any_email@email.com",
  "password": "any_password"
}
```

**Resposta com sucesso**
`Status: 200 OK`

```json
{
  "id": "any_uuid",
  "name": "Any Name",
  "email": "any_email@email.com",
  "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6Ij..."
}
```

**Resposta com erro - e-mail ou senha incorretos**
`Status: 400 Bad Request`

```json
{
  "error": "Invalid e-mail or password"
}
```

**Resposta com erro - erro interno**
`Status: 500 Server Error`

```json
{
  "error": "Something went wrong. Please try again later."
}
```
