import bcrypt from 'bcrypt';
import express from 'express';
import jwt from 'jsonwebtoken';
import Users from '../model/user.js';

const router = express.Router();

const createUserToken = (userId) => {
  return jwt.sign({ id: userId }, 'batatafrita2021', { expiresIn: '7d' });
};

router.get('/', async (request, response) => {
  try {
    const users = await Users.find({});

    return response.status(200).send(users);
  } catch (error) {
    return response.status(500).send({ error: 'Erro na consulta do usuário!' });
  }
});

router.post('/create', async (request, response) => {
  const { email, password } = request.body;

  if (!email || !password) return response.status(400).send({ error: 'Dados insuficientes para criação do usuáio' });

  try {
    const searchUser = await Users.findOne({ email });
    if (searchUser) return response.status(400).send({ error: 'Usuário já cadastrado!' });

    const user = await Users.create({ email, password });
    user.password = undefined;

    return response.status(201).send({ user, token: createUserToken(user.id) });
  } catch (error) {
    return response.status(500).send({ error: 'Erro ao cadastrar o usuário' });
  }
});

router.post('/auth', async (request, response) => {
  const { email, password } = request.body;

  if (!email || !password) return response.status(400).send('Dados insuficientes para autenticação do usuário');

  try {
    const user = await Users.findOne({ email }).select('+password');

    if (!user) return response.status(404).send({ error: 'Usuário não cadastrado' });

    const authUser = await bcrypt.compare(password, user.password);

    if (!authUser) return response.status(401).send({ error: 'Erro ao autenticar o usuário' });

    user.password = undefined;
    return response.status(200).send({ user, token: createUserToken(user.id) });
  } catch (error) {
    return response.status(500).send({ error: 'Usuário não registrado' });
  }
});

export default router;
