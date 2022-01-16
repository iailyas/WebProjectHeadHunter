const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
  info: {
    version: "", // by default: '1.0.0'
    title: "HH API", // by default: 'REST API'
    description: "Web application for HH", // by default: ''
  },
  host: "", // by default: 'localhost:3000' -- NO! by default empty (but used current host)!
  basePath: "", // by default: '/'
  schemes: [], // by default: ['http']
  consumes: [], // by default: ['application/json']
  produces: [], // by default: ['application/json']
  tags: [
    // by default: empty Array
    {
      name: "Users", // Tag name
      description: "Users API", // Tag description
    },
    {
      name: "Company", // Tag name
      description: "Company API", // Tag description
    },
    {
      name: "Portfolio", // Tag name
      description: "Portfolio API", // Tag description
    },
    {
      name: "Requests", // Tag name
      description: "Requests API", // Tag description
    },
    {
      name: "Reviews", // Tag name
      description: "Reviews API", // Tag description
    },
    {
      name: "Summary", // Tag name
      description: "Summary API", // Tag description
    },
    {
      name: "Vacancies", // Tag name
      description: "Vacancies API", // Tag description
    },
    {
      name: "Working_place", // Tag name
      description: "Working_place API", // Tag description
    },
    // { ... }
  ],
  securityDefinitions: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT",
    },
  }, // by default: empty object (Swagger 2.0)
  definitions: {}, // by default: empty object
  components: {}, // by default: empty object (OpenAPI 3.x)
};

const outputFile = "src/swagger/swagger.json";
const endpointsFiles = ["src/loader/Routing.js"];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
