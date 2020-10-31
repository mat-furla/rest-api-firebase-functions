# Firebase Functions Rest API

Implementação básica de uma rest api utilizando firebase functions e typescript. Seu deploy pode ser feito utilizando o firebase hosting.

## Configuração

Lembre-se de editar o arquivo `firebase.json` para conter o PROJECT-ID do projeto do firebase desejado.

## Autenticação

Para utilizar autenticação nas requisições descomente as funções no arquivo `functions/src/routes/Routes.ts`. Faça as requisições passando o token do usuário através de um header `Authorization`.

## Deploy

Utilizando o `firebase-cli` execute no terminal:

```bash
>> firebase deploy
```

Siga as instruções para logar em sua conta do firebase e escolher o projeto no qual o deploy será realizado.