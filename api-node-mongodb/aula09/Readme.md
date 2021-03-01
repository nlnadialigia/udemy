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

<h3>Últimas detalhes para finalização do proejto</h3><br>

### 📚 Configuração final do projeto

▶️ Criação de arquivo de configuração para que as variáveis de ambientes possam ser usadas de acordo com a necessidade, sem repetição de código.

▶️ Criação `config/config.js`
- a variável `env` determina como será utilizado os dados.  
- o banco de dados de cada ambiente deve ser diferente.

▶️ Configurar a senha do jwt no arquivo `config`

▶️ Criar um arquivo `config-example.js` para enviar a modelo, sem as informações do banco de dados e token.

```js
const env = process.env.NODE_ENV || 'dev';

const config = () => {
  switch (env) {
    case 'dev':
      return {
        bd_string: '<endereço do banco de dados>',
        jwt_pass: '<senha do token>',
        jwt_expires: '<tempo de expiração do token>'
      };

    case 'hml':
      return {
        bd_string: '<endereço do banco de dados>',
        jwt_pass: '<senha do token>',
        jwt_expires: '<tempo de expiração do token>'
      };

    case 'prod':
      return {
        bd_string: '<endereço do banco de dados>',
        jwt_pass: '<senha do token>',
        jwt_expires: '<tempo de expiração do token>'
      };
  }
};

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);
```

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

