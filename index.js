const app = require('express')();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerIndex = YAML.load('swagger.yml');

const RefParser = require('json-schema-ref-parser');
RefParser.dereference(swaggerIndex).then((swaggerDocs) => {
  app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  app.listen(5000, () => {
    console.log('Server is listening on port 5000');
  });
});
