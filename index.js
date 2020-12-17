const app = require('express')();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs')
const swaggerDocs = YAML.load('./swagger.yml')

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
