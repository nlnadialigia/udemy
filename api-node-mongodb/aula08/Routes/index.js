import express from 'express';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.get('/', auth, (request, response) => {
  console.log(response.locals.auth_data);
  return response.status(200).send({ message: 'Essa é uma informação muit importante! Usuário não autenticado não deveria receber!' });
});

router.post('/', (request, response) => {
  return response.status(201).send({ message: 'Tudo ok com o método POST da rota raiz' });
});

export default router;
