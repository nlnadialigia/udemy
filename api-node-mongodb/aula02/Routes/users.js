import express from 'express';
const router = express.Router();

router.get('/', (request, response) => {
  return response.send({ message: 'Tudo ok com o método GET da rota users' });
});

router.post('/', (request, response) => {
  return response.send({ message: 'Tudo ok com o método POST da rota users' });
});

router.post('/create', (request, response) => {
  return response.send({ message: 'Seu usuário foi criado' });
});

export default router;
