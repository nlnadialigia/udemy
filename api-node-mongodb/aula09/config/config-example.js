const env = process.env.NODE_ENV || 'dev';

const config = () => {
  switch (env) {
    case 'dev':
      return {
        bd_string: '<endereço do banco de dados>',
        jwt_pass: '<senha do token>',
        jwt_expires: '<tempo de expiração do token>'
      };

    case 'hml':
      return {
        bd_string: '<endereço do banco de dados>',
        jwt_pass: '<senha do token>',
        jwt_expires: '<tempo de expiração do token>'
      };

    case 'prod':
      return {
        bd_string: '<endereço do banco de dados>',
        jwt_pass: '<senha do token>',
        jwt_expires: '<tempo de expiração do token>'
      };
  }
};

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

export default config();
