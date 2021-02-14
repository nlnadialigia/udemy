<p align="center"><img src="../../assets/logo.png" width=200></p>
<h2 align="center">Curso básico de APIs com Nodejs+Express+Mongodb</h2>

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
  <a href="#-information_source-sobre-a-aula">Sobre</a> •
  <a href="#-open_file_folder-tópicos">Tópicos</a> • 
  <a href="#-woman_office_worker-autora">Autora</a> • 
  <a href="#-pencil-licença">Licença</a>
</p>
<br>

## ℹ️ Sobre a aula

<h3>Aula de iniciação do projeto e criação de endpoints básicos.</h3>

## 📂 Tópicos
<br>

### 📚 Aula 01 - Iniciando Projeto e criando endpoints
<br>

▶️ Iniciar o projeto `yarn init`

▶️ Criar o arquivo principal: `app.js`

▶️ Instalar o `express`

▶️ Criação básica da api
```js
import express from 'express';
const app = express();

app.listen(3030);

export default app;
```
▶️ Criação do endpoint `get`
```js
app.get('/', (request, response) => {
  return response.send({message: 'Tudo ok com o método GET!'});
});
```
▶️ Criação do endpoint `post`
```js
app.post('/', (request, response) => {
  return response.send({message: 'Tudo ok com o método POST!'});
});
```
▶️ Testar no Isnominia

▶️ Criação de uma `query` para o endpoint `get`
```js
app.get('/', (request, response) => {
  let obj = request.query;
  return response.send({message: `Tudo ok com o método GET! Você enviou o nome ${obj.name} com idade de ${obj.age} anos!`});
});
```

# 👩‍💼 Autora
<img style="border-radius: 50%;" src="../../assets/picture.jpg" width="100px;" alt="Picture"/>
<p><b>Nádia Ligia</b></p>

[![Linkedin Badge](https://img.shields.io/badge/-nlnadialigia-blueviolet?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nlnadialigia/)](https://www.linkedin.com/in/nlnadialigia/) 
[![Gmail Badge](https://img.shields.io/badge/-nlnadialigia@gmail.com-blueviolet?style=flat&logo=Gmail&logoColor=white&link=mailto:nlnadialigia@gmail.com)](mailto:nlnadialigia@gmail.com)

<br>

# 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.