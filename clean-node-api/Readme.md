<p align="center"><img src="../assets/logo.png" width=200></p>
<h2 align="center">NodeJs, Typescript, TDD, DDD, Clean Architecture e SOLID</h2>

---

<p align="center">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/nlnadialigia/udemy" />

  <img alt="Repo size" src="https://img.shields.io/github/repo-size/nlnadialigia/udemy"/>
   
  <a href="./license.md">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-informational"/>
  </a>
</p>

---

<p align="center">
  <a href="#-information_source-sobre-o-projeto">Sobre</a> •
  <a href="#-open_file_folder-aulas">Aulas</a> • 
  <a href="#-woman_office_worker-autora">Autora</a> • 
  <a href="#-pencil-licença">Licença</a>
</p>
<br>

# ℹ️ Sobre o projeto 

<h3>Repositório dedicado a documentar as aulas dos cursos.<br>
Este repositório será dividido por aula e manterá o link para o projeto completo.</h3>

<br>

# 📂 Aulas

### 📔 [0. Projeto](https://github.com/nlnadialigia/clean-node-api.git)

### 📚 Seção 1: Introdução

- [Configurando dependências](./aula01)

### 📚 Seção 2: Signup API - Presentation Layer

- [Criando o SignUpController, validando o request e criando erros personalizados](./aula02-a)

- [Utilizando Mocks da maneira correta](./aula2-b)

<!-- [Testando exceções e integrando com o EmailValidator]() -->

<!-- [Integrando com o AddAccount Usecase]() -->

### 📚 Seção 3: Jest

<!-- [Configurando o Jest e criando scripts de testes]() -->

### 📚 Seção 4: Utils Layer

<!-- [Criando o EmailValidatorAdapter e mockando o validator]() -->

### 📚 Seção 5: SignUp API - Data Layer

<!-- [Criando o DbAddAccount e integrando com o Encrypter]()

[Integrando com o AddAccountRepository]() -->

### 📚 Seção 6: SignUp API - Infra Layer

<!-- [Criando o BcryptAdapter e mockando o bcrypt]()

[Configurando MongoDb em memória]()

[Testando o MongoDb]() -->

### 📚 Seção 7: SignUp API - Main Layer

<!-- ▶️ Testando middlewares do express

▶️ Criando teste de integração para o SignUp

▶️ Fazendo a composição do SignUp e desacoplando do express -->

### 📚 8: Bônus

<!-- ▶️ Testando a conexão com o MongoDb

▶️ Aplicando o Design Pattern Decorator

▶️ Adicionando Log de Erro

▶️ Refatorando os testes

▶️ Persistindo Log de Erro no MongoDb

▶️ Criando Tag e fazendo Push para o GitHub -->

### 📚 9: Login API - Presentation

<!-- ▶️ Criando o LoginController e validando o request

▶️ Testando a integração do LoginController com o Authentication U…

▶️ Testando a integração do LoginController com o Authentication Usecase

▶️ Aplicando o Design Pattern Composite 1/3

▶️ Aplicando o Design Pattern Composite 2/3

▶️ Aplicando o Design Pattern Composite 3/3

▶️ Refatorando o código -->

### 📚 10: Login API - Data Layer

<!-- ▶️ Criando o DbAuthentication e integrando com o LoadAccountByEmailRepository

▶️ Integrando o DbAuthentication com mais 3 dependências -->

### 📚 11: Bônus

<!-- ▶️ Segurança -->

### 📚 12: Login API - Infra Layer

<!-- ▶️ Incluindo o HashComparer ao BcryptAdapter

▶️ Criando o JwtAdapter e mockando o jsonwebtoken

▶️ Incluindo mais duas interfaces no AccountMongoRepository -->

### 📚 13: Login API - Main Layer

<!-- ▶️ Refatorando o projeto

▶️ Fazendo a composição do Login -->

### 📚 14: Bônus

<!-- ▶️ Subindo a API para o Heroku

▶️ Gerando uma imagem da API com Docker

▶️ Organizando as imagens e containers com Docker Compose

▶️ Debugando API com breakpoint

▶️ Usando Nodemon no Docker com Typescript

▶️ Adicionando documentação com casos de uso -->

### 📚 15: SignUp API - Ajustes

<!-- ▶️ Alterando o SignUp para retornar um token de acesso

▶️ Correção pra próxima aula!!!

▶️ Impedindo criação de contas com Email existente

▶️ Refatorando a arquitetura -->

### 📚 16: AddSurvey API

<!-- ▶️ Criando o AddSurveyController

▶️ Criando o DbAddSurvey UseCase

▶️ Criando o SurveyMongoRepository

▶️ Criando a composição do AddSurvey -->

### 📚 17: Criando Middleware de Autenticação

<!-- ▶️ Criando o AuthMiddleware e fazendo os primeiros testes

▶️ Finalizando os testes do AuthMiddleware

▶️ Criando o DbLoadAccountByToken

▶️ Implementando a interface Decrypter no JwtAdapter

▶️ Implementando a interface LoadAccountByToken no AccountMongoRepository

▶️ Aplicando o AuthMiddleware na rota de criar enquete -->

### 📚 18: Bônus

<!-- ▶️ Integração contínua -->

### 📚 19: LoadSurveys API

<!-- ▶️ Criando o LoadSurveysController

▶️ Criando o DbLoadSurveys UseCase

▶️ Incluindo o LoadSurveysRepository ao SurveyMongoRepository

▶️ Criando a composição do LoadSurveys -->

### 📚 20: Bônus

<!-- ▶️ Modularizando os paths dos imports

▶️ Utilizando Type Alias

▶️ Usando Utility Types do Typescript -->

### 📚 21: SaveSurveyResult API

<!-- ▶️ Criando os Models e UseCases

▶️ Criando o DbLoadSurveyByIdUseCase

▶️ Criando o DbSaveSurveyResultUseCase

▶️ Incluindo o LoadSurveyByIdRepository ao SurveyMongoRepository

▶️ Incluindo o SaveSurveyResultRepository ao SurveyResultMongoRepository

▶️ Refactor - Organizando pastas

▶️ Criando o SaveSurveyResultController 1/2

▶️ Criando o SaveSurveyResultController 2/2

▶️ Fazendo a composição do SaveSurveyResult -->

### 📚 22: Refactor

<!-- ▶️ Padronizando nomenclaturas

▶️ Reutilizando a criação de mocks

▶️ Finalizando o refactor dos testes

▶️ Último ajuste do refactor!

▶️ Refatorando as Promises -->

### 📚 23: Bônus - Swagger

<!-- ▶️ Integrando a nossa API com o Swagger

▶️ Criando docs para a API de Login

▶️ Criando componentes reutilizáveis

▶️ Criando docs para a API de Listar Enquetes com Autenticação

▶️ Criando docs para a API de SignUp

▶️ Criando docs para a API de Criar Enquete

▶️ Criando docs para a API de Responder Enquete -->

### 📚 24: LoadSurveyResult API

<!-- ▶️ Alterando o retorno do SurveyResult

▶️ Usando aggregation para retornar o resultado da enquete

▶️ Aplicando o Design Pattern Builder

▶️ Correção no Aggregation do resultado da enquete

▶️ Criando o LoadSurveyResultUseCase

▶️ Incluindo o LoadSurveyResultRepository ao SurveyResultMongoRepository

▶️ Mudança no método de salvar resposta da enquete

▶️ Corrigindo outro bug identificado

▶️ Criando o LoadSurveyResultController

▶️ Fazendo a composição do LoadSurveyResult -->

### 📚 25: Bônus

<!-- ▶️ Migrando de Stub para Spy

▶️ Servindo arquivos estáticos

▶️ Ajuste na autenticação para retornar mais dados

▶️ Ajuste na listagem de enquetes

▶️ Ajuste no DbLoadAccountByToken

▶️ Ajuste no SurveyResult -->

### 📚 26: Melhorando a Arquitetura

<!-- ▶️ Refatorando os testes

▶️ Refatorando os Controllers

▶️ Refatorando o AddAccountUseCase

▶️ Refatorando o AddSurvey UseCase

▶️ Refatorando o AuthenticationUseCase

▶️ Refatorando o LoadAccountByTokenUseCase

▶️ Otimizando queries e removendo dependências do AccountModel

▶️ Dividindo melhor responsabilidades

▶️ Refatorando o LoadSurveyByIdUseCase

▶️ Criando o CheckSurveyById

▶️ Criando o LoadAnswersBySurvey

▶️ Otimizando o LoadAnswersBySurvey

▶️ Refatorando o LoadSurveysUseCase

▶️ Refatorando o LoadSurveyResult e SaveSurveyResult UseCases -->

### 📚 27: GraphQL

<!-- ▶️ Criando o Schema para o Login

▶️ Reaproveitando o LoginController no GraphQL

▶️ Tratamento de erros com Plugin

▶️ Definindo a query de listar enquetes

▶️ Criando uma diretiva de autenticação

▶️ Criando as queries do resultado da enquete

▶️ Adicionando testes de integração para as queries de Login

▶️ Adicionando testes de integração para as queries de Surveys

▶️ Adicionando testes de integração para as queries de SurveyResult

▶️ Fazendo merge e deploy -->

# 👩‍💼 Autora
<img style="border-radius: 50%;" src="../assets/picture.jpg" width="100px;" alt="Picture"/>
<p><b>Nádia Ligia</b></p>

[![Linkedin Badge](https://img.shields.io/badge/-nlnadialigia-blueviolet?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nlnadialigia/)](https://www.linkedin.com/in/nlnadialigia/) 
[![Gmail Badge](https://img.shields.io/badge/-nlnadialigia@gmail.com-blueviolet?style=flat&logo=Gmail&logoColor=white&link=mailto:nlnadialigia@gmail.com)](mailto:nlnadialigia@gmail.com)

<br>

# 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
