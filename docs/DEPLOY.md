# Deploy

Este serviço está hospedado no site [fly.io](https://fly.io/).

Ao criar uma nova feature, mergear na develop, realizar os testes necessários e mergear a develop na main.

## Gerar versão

Para gerar uma versão seguir o passo a passo abaixo:

- Executar o comando `npx np`.
- Escolher a versão de acordo com o que foi alterado desde a última versão.

Este processo alterará a versão no package.json, realizará um commit e fará o push. Com isso será trigado um pipeline com o Github Actions que subirá a nova versão do serviço no servidor.

Em algum momento também pode ser aberto uma página do GitHub para criação da release com changelog.
