import express from 'express';
const app = express();

app.get('/', (request, response) => {
  const obj = request.query;
  return response.send({ message: `Tudo ok com o método GET! Você enviou o nome ${obj.name} com idade de ${obj.age} anos!` });
});

app.post('/', (request, response) => {
  return response.send({ message: 'Tudo ok com o método POST!' });
});

app.listen(3030, () => {
  console.log('API is running on PORT 3030');
});

app.listen(3030, () => {
  console.log('API is running on PORT 3030!');
});
