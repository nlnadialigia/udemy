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

<h3>Reagoração do código com a utilização de <strong>async await</strong></h3><br>

### 📚 Aula 06 - Async await e o fim do callback hell
<br>

▶️ Refatração do código a a fim de melhor a legitimidade, utilizando `async await`.
- `model/user.js`
  ```js
  UserSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();

    user.password = await bcrypt.hash(user.password, 10);
    return next();
  });
  ```

- `Routes/user.js`
  ```js
  router.get('/', async (request, response) => {
    try {
      const user = await Users.find({});

      return response.send(user);
    } catch (error) {
      return response.send({ error: 'Erro na consulta do usuário!' });
    }
  });
  ```

  ```js
  router.post('/create', async (request, response) => {
    const { email, password } = request.body;

    if (!email || !password) return response.send({ error: 'Dados insuficientes para criação do usuáio' });

    try {
      const searchUser = await Users.findOne({ email });
      if (searchUser) return response.send({ error: 'Usuário já cadastrado!' });

      const user = await Users.create({ email, password });
      user.password = undefined;

      return response.send(user);
    } catch (error) {
      return response.send({ error: 'Erro ao cadastrar o usuário' });
    }
  });
  ```
  ```js
  router.post('/auth', async (request, response) => {
    const { email, password } = request.body;

    if (!email || !password) return response.send('Dados insuficientes para autenticação do usuário');

    try {
      const user = await Users.findOne({ email }).select('+password');

      if (!user) return response.send({ error: 'Usuário não cadastrado' });

      const authUser = await bcrypt.compare(password, user.password);

      if (!authUser) return response.send({ error: 'Erro ao autenticar o usuário' });

      user.password = undefined;
      return response.send(user);
    } catch (error) {
      return response.send({ error: 'Usuário não registrado' });
    }
  });
  ```
⁉️ Testar no Insomnia e banco de dados

<br>

# 👩‍💼 Autora
<img style="border-radius: 50%;" src="../../assets/picture.jpg" width="100px;" alt="Picture"/>
<p><b>Nádia Ligia</b></p>

[![Linkedin Badge](https://img.shields.io/badge/-nlnadialigia-blueviolet?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nlnadialigia/)](https://www.linkedin.com/in/nlnadialigia/) 
[![Gmail Badge](https://img.shields.io/badge/-nlnadialigia@gmail.com-blueviolet?style=flat&logo=Gmail&logoColor=white&link=mailto:nlnadialigia@gmail.com)](mailto:nlnadialigia@gmail.com)

<br>

# 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../../LICENSE) para mais detalhes.