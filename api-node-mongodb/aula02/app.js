import express from 'express';
import indexRoute from './Routes/index.js';
import usersRoute from './Routes/users.js';

const app = express();

app.use('/', indexRoute);
app.use('/users', usersRoute);

app.listen(3030, () => {
  console.log('API is running on PORT 3030');
});
