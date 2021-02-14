import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import config from './config/config.js';
import indexRoute from './Routes/index.js';
import usersRoute from './Routes/users.js';

(async () => {
  try {
    await mongoose.connect(
      `${config.bd_string}`,
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

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', indexRoute);
app.use('/users', usersRoute);

app.listen(3030, () => {
  console.log('API is running on PORT 3030');
});
