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
