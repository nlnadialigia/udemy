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

<h3>Aula de criação das rotas principais e de usuários em arquivos individualizados e conexão com o banco de dados.</h3>

## 📂 Tópicos
<br>

### 📚 Aula 02 - Trabalhando com rotas
<br>

▶️ Criação da pasta para armazenar as rotas da api: `Routes`

- `index.js` => rota genérica
- `users.js` => rota relacionada a usuários

▶️ Instanciar as rotas no arquivo principal da api.

▶️ **Routes/index.js**
```js
import express from 'express';
const router = express.Router();

router.get('/', (request, response) => {
  return response.send({ message: 'Tudo ok com o método GET da rota raiz' });
});

router.post('/', (request, response) => {
  return response.send({ message: 'Tudo ok com o método POST da rota raiz' });
});

export default router;
```

▶️ **Routes/users.js**
- código semelhante ao do `index.js`, alterando o endereço da rota e a mensagem

▶️ Testar no Insomnia

▶️ Criação da rota base para cadastro de usuários => `users.js`
```js
router.post('/create', (request, response) => {
  return response.send({ message: 'Seu usuário foi criado' });
});
```
<br>

# 👩‍💼 Autora
<img style="border-radius: 50%;" src="../../assets/picture.jpg" width="100px;" alt="Picture"/>
<p><b>Nádia Ligia</b></p>

[![Linkedin Badge](https://img.shields.io/badge/-nlnadialigia-blueviolet?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nlnadialigia/)](https://www.linkedin.com/in/nlnadialigia/) 
[![Gmail Badge](https://img.shields.io/badge/-nlnadialigia@gmail.com-blueviolet?style=flat&logo=Gmail&logoColor=white&link=mailto:nlnadialigia@gmail.com)](mailto:nlnadialigia@gmail.com)

<br>

# 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.