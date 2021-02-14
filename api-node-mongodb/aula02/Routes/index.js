import express from 'express';
const router = express.Router();

router.get('/', (request, response) => {
  return response.send({ message: 'Tudo ok com o método GET da rota raiz' });
});

router.post('/', (request, response) => {
  return response.send({ message: 'Tudo ok com o método POST da rota raiz' });
});

export default router;
