import bcrypt from 'bcrypt';
import express from 'express';
import Users from '../model/user.js';
const router = express.Router();

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

export default router;
