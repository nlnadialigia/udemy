<p align="center"><img src="../../assets/logo.png" width=200></p>
<h3 align="center">NodeJs, Typescript, TDD, DDD, Clean Architecture e SOLID</h3>

---

<p align="center">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/nlnadialigia/udemy?color=91091e" />

  <img alt="Repo size" src="https://img.shields.io/github/repo-size/nlnadialigia/udemy?color=91091e"/>
   
  <a href="./license.md">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-informational?color=91091e"/>
  </a>
</p>

---

<p align="center">
  <a href="#-information_source-sobre-a-aula">Sobre</a> •
  <a href="#-open_file_folder-tópicos">Tópicos</a> • 
  <a href="#-woman_office_worker-autora">Autora</a> • 
  <a href="#-pencil-licença">Licença</a>
</p>
<br>

# ℹ️ Sobre a aula

<h3>Criação do SignUpController, validando o request e criando erros personalizados.</h3>
<br>

# 📂 Tópicos

## ℹ️ Diagrama

<img src="./assets/signup-diagram.png">

<br>

<br>

## 📂 Estrutura

<img src="./assets/folders.png" height=400>

<br>

<br>

## 📂 signup.spec.ts

<br>

▶️ Rota com nome, email e senha para criar a conta de usuário

<br>

### ⁉️ Verificar se foi enviado a variável `name`

<img src="./assets/test01.png" width=500>

<br>

✔️ Validar se os parâmetros estão vindo corretamente do `client`
  - `sut` => system under test => facilita a identificação de qual classe está sendo testada.

✔️ Invocar a função `handle` que recebe uma requisição e retorna uma resposta

✔️ As variáveis esperadas por essa rota são:

<img src="./assets/httpRequest.png" width=400>

✔️ Fazer a requisição eliminando a variável `name` da variável `httpRequest`

✔️ Criar arquivo de produção do `Teste1` => **signup.ts**

<img src="./assets/signup.png" width=400>

✔️ **signup.ts:**
  - deve possuir o método `handle` que recebe `httpRequest` e retorna `httpResponse`
  - importar o `SignupController` no *Test 1*

✔️ Foi instalada a extensão [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest), que já faz o verificação do test conforme é escrito. Caso não deseje utilizar a extensão, rodar o teste.

<img src="./assets/test01-result.png" width=400>

:floppy_disk: Commitar as alterações

<br>

### ⁉️ Verificar se foi enviado a variável `email`

<img src="./assets/test02.png" width=500>

✔️ Serão realizadas os mesmo passos da verificação do `name`, alterando a variável para `email`.

✔️ Refatoração da **signup.ts** para que verifique qual a validação está sendo realizada e retorno o erro adequado.

<img src="./assets/refactor-signup.png" width=400>

✔️ Testar e commitar.

<br>

# 👩‍💼 Autora

<img style="border-radius: 50%;" src="../../assets/picture.jpg" width="100px;" alt="Picture"/>
<p><b>Nádia Ligia, desenvolvedora back-end em formação.</b></p>

<a href="https://www.linkedin.com/in/nlnadialigia/">
  <img alt="Linkedin" src="https://img.shields.io/badge/-Linkedin -91091e?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nlnadialigia/" />
</a>&nbsp;
<a href="mailto:nlnadialigia@gmail.com">
  <img alt="Email" src="https://img.shields.io/badge/-Email-91091e?style=flat&logo=Gmail&logoColor=white&link=mailto:nlnadialigia@gmail.com" />
</a>&nbsp;
<a href="https://www.nlnadialigia.com">
  <img alt="Homepage" src="https://img.shields.io/badge/-Homepage-91091e" />
</a>

<br><br>

# 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.