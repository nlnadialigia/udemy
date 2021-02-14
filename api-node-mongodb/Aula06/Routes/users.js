import bcrypt from 'bcrypt';
import express from 'express';
import Users from '../model/user.js';
const router = express.Router();

router.get('/', async (request, response) => {
  try {
    const users = await Users.find({});

    return response.send(users);
  } catch (error) {
    return response.send({ error: 'Erro na consulta do usuário!' });
  }
});

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

export default router;
