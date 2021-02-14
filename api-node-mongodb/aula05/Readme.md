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

<h3>Criação da rota de autenticação do usuário</h3><br>

### 📚 Aula 05 - Criptografia de campos de senha com [bcrypt](https://www.npmjs.com/package/bcrypt)
<br>

▶️ Instalação do bcrypt `yarn add bcrypt` 

▶️ Adicionar no model `user.js` um esquema de `pre-save` para criptografar a senha antes de finalizar o cadastro.
```js
UserSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  bcrypt.hash(user.password, 10, (_, encrypted) => {
    user.password = encrypted;
    return next();
  });
});
```
▶️ Criação na rota `user` de um endpoint de autenticação
- Para fazer a autenticação é necessário comparar se a senha informada é igual a senha armazenda no banco de dados. Como a senha do banco de dados está criptografada será necessário primeiramente criptografar a senha fornecida para depois fazer a comparação.
```js
router.post('/auth', (request, response) => {
  const { email, password } = request.body;

  if (!email || !password) return response.send('Dados insuficientes para autenticação do usuário');

  Users.findOne({ email }, (error, data) => {
    if (error) return response.send({ error: 'Erro ao buscar usuário!' });
    if (!data) return response.send({ error: 'Usuário não registrado' });

    bcrypt.compare(password, data.password, (_, same) => {
      if (!same) return response.send({ error: 'Erro ao autenticar o usuário' });

      data.password = undefined;
      return response.send(data);
    });
  }).select('+password');
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