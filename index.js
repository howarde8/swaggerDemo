const app = require('express')();
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
