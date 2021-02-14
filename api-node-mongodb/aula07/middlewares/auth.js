import jwt from 'jsonwebtoken';

const auth = (request, response, next) => {
  const tokenHeader = request.headers.auth;
  if (!tokenHeader) return response.send({ error: 'Autenticação recusada - Token não enviado!' });

  jwt.verify(tokenHeader, 'batatafrita2021', (error, decoded) => {
    if (error) return response.send({ error: 'Token inválido' });
    response.locals.auth_data = decoded;
    return next();
  });
};

export default auth;
