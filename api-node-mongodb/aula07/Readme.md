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

<h3>Criação de autenticação para acesso às rotas principais da api</h3><br>

### 📚 Aula 07 - autenticação com [jwt](https://jwt.io)

▶️ Configuração das rotas da raíz para que somente usuários autenticados possam acessar as informações. Para isso será utilizado token para validação. O token será recebido quando o usuário é criado e/ou logado.

▶️ Para o recebimento das informações é necessária a utilização do token, que será utilizado com a biblioteca `jsonwebtoken(jwt)`

▶️ Instalação da biblioteca jwt => `yarn add jsonwebtoken`

▶️ Na rota `users.js` será incluída a criação do token quando o criar ou logar o usuário. 

- Como a função será utilizada em mais de um lugar, será criada fora da rota para poder ser reutilizada sem duplicação.
  ```js
  const createUserToken = (userId) => {
    return jwt.sign({ id: userId }, 'batatafrita2021', { expiresIn: '7d' });
  };
  ```
- Na criação do usuário, antes de enviar as informações, será criado o token
  ```js
  return response.send({ user, token: createUserToken(user.id) });
  ```

⁉️ Testar no Insomnia

▶️ Criação de um middleware para tratativa do token => `middlewares/auth.js`
```js
const auth = (request, response, next) => {
  const tokenHeader = request.headers.auth;
  if (!tokenHeader) return response.send({ error: 'Autenticação recusada - Token não enviado!' });

  jwt.verify(tokenHeader, 'batatafrita2021', (error, decoded) => {
    if (error) return response.send({ error: 'Token inválido' });
    response.locals.auth_data = decoded;
    return next();
  });
};
```

▶️ Utilização da variável `auth` na rota principal => `index.js`
```js
router.get('/', auth, (request, response) => {
  return response.send({ message: 'Essa é uma informação muit importante! Usuário não autenticado não deveria receber!' });
});
```

⁉️ Testar
- criar um usuário
- copiar o token criado
- testar a rota GET raiz sem o envio do token
- testar a rota GET raiz com o envio do token errado e correto

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
