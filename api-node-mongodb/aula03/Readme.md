<p align="center"><img src="../../assets/logo.png" width=200></p>
<h2 align="center">Curso básico de APIs com Nodejs+Express+Mongodb</h2>

---

<p align="center">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/nlnadialigia/udemy?color91091e" />

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

<h3>Conexão da api com o banco de dados</h3><br>

## 📂 Tópicos
<br>

### 📚 Aula 03 - Conectando mongodb com mongoose
<br>

▶️ Criação do Cluster no [MongoDB Atlas](https://www.mongodb.com)

▶️ Configurar o Cluster
- Connect 
  - criar usuário e senha
  - adicionar IP address
  - ecolher método de conexão

▶️ Utilização do [Mongoose](https://mongoosejs.com) para organização do banco de dados

▶️ Instalação do [body-parser](https://www.npmjs.com/package/body-parser)

▶️ Instanciar na raiz do projeto o mongoose e o body parser e criar a url do banco de dados.

▶️ Para não manter as credenciais do banco de dados escondidas. Instalação e configuração do dotenv para manter as credenciais.
```js
config();

(async () => {
  try {
    await mongoose.connect(
      `${process.env.db}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      }
    );
    console.log('MongoDB Conectado com sucesso!');
  } catch (error) {
    console.log('Erro ao conectar no MongoDB');
  }
})();
```

▶️ Configuração do `body parser`
- conversão da resposta do `body` para que seja convertido em `json`
```js
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
```

▶️ Rodar api para verificar se o banco de dados está sendo conectado.

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
