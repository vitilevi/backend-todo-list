# BackEnd TodoList
  
Requisitos técnicos:
* Front-End em React;
* Back-End em NodeJS, com MongoDB;
* Arquitetura em camadas;
  
  
Funcionalidades:
* - [x] Visualizar a lista de tarefas;
* - [ ] Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status;
* - [x] Inserir uma nova tarefa na lista;
* - [x] Remover uma tarefa da lista;
* - [x] Atualizar uma tarefa da lista;
* - [x] A tarefa deve possuir um status editável: pendente, em andamento ou pronto;

## Tecnologias utilizadas
Aplicação backend desenvolvida com MongoDB, Node.js, Express, Express Rescue e Google OAuth2.0
  
  
## Autenticação
Foi utilizado o sistema de OAuth2.0 do Google para login de usuário, tornando "mais facil" manter dados de pessoas que utilizam a aplicação, sendo salvo assim somente email, nome e foto no banco de dados. Toda parte de autenticação é feita diretamente pelo Google, onde a api de autenticação retorna um token com todas as informações da pessoa usuária, bem similar ao JWT.
  
  
## Rotas
Foram implementadas 4 rotas para a aplicação completa, sendo elas:
  - POST: `/login` - Responsável por realizar o login da pessoa usuária, caso a pessoa não tenha cadastro, ele é feito de forma automática
  - POST: `/task` - Envia tarefas para serem salvas no banco de dados
  - PUT: `/task` - Atualiza tarefa no banco de dados
  - DELETE: `/task` - Deleta tarefa no banco de dados
  
  
## Camadas
  - `Controller` - Lida com as requisições e repostas do cliente.
  - `Service` - Impoem regras de negócio, como validação de pessoa usuária, e retornos do banco de dados.
  - `Model` - Lida com o banco de dados diretamente, tornando uma possível alteração de banco de dados mais fácil.
  - `Validation` - Valida os retornos do banco de dados, tratando possíveis erros.
  
  
## Deploy
A aplicação completa foi feita deploy, para o MongoDB foi utilizado Mongo Cluster, um microsserviço AWS disponibilizado diretamente pela empresa Mongo.
Para a api o deploy foi feito através do Heroku, utilizando variáveis de ambiente para guardar informações de acesso do banco de dados, e o id privado da aplicação que possibilita o uso do OAuth2.0.
  
  
### OBS
Não é possivel rodar o backend localmente, devido a suas variáveis de ambiente guardarem informações privadas para a conexão com o banco de dados.
