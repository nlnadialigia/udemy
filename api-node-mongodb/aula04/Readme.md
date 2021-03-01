<p align="center"><img src="../../assets/logo.png" width=200></p>
<h2 align="center">Curso básico de APIs com Nodejs+Express+Mongodb</h2>

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

## ℹ️ Sobre a aula

<h3>Criação do schema de usuários e atualização das rotas para criação e consulta de usuários.</h3><br>

## 📂 Tópicos
<br>

### 📚 Aula 04 - Criando schemas do mongoose
<br>

▶️ Criar uma pasta para separar os arquivos de modelagem no banco => `model`
  - Arquivo de criação do usuário: `users.js`

▶️ Criar o schema do mongoose com os dados necessários para criação de um usuário.
  - quando adicionado o `select: false` na criação do password, quando buscamos o usuário ele retornas as informações exceto o password.
```js
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  created: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('User', UserSchema);
```
▶️ Implementar o endpoint `POST` e o endpoint `GET` com os dados implementados no schema de usuário.
```js
router.get('/', (request, response) => {
  Users.find({}, (error, data) => {
    if (error) return response.send({ error: 'Erro na consulta de usuário' });

    return response.send(data);
  });
});

router.post('/create', (request, response) => {
  const { email, password } = request.body;

  if (!email || !password) return response.send({ error: 'Dados insuficientes para criação do usuáio' });

  Users.findOne({ email }, (error, data) => {
    if (error) return response.send({ error: 'Erro ao buscar usuário' });
    if (data) return response.send({ error: 'Usuário já cadastrado!' });

    Users.create({ email, password }, (error, data) => {
      if (error) return response.send({ error: 'Erro ao cadastrar o usuário' });

      data.password = undefined;
      return response.send(data);
    });
  });
});
```
⁉️ Testar no Insomnia e verificar se foi adicionado o usuário no banco de dados.

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

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.