const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Hapiswaggerd = require('hapi-swaggered');
const HapiswaggerdUI =  require('hapi-swaggered-ui');
const routes = require('./route/routes');

(async () => {
  const server = await new Hapi.Server({
    host: 'localhost',
    port:8000
  });

  await server.register([
    Inert,
    Vision,
    {
      plugin: Hapiswaggerd,
      options: {
        // tags: {
        //   'foobar/test': 'Example foobar description',
        // },
        info: {
          title: "API Documentation.",
          description: "Powered by Hapi swaggered, Hapi, and Joi.",
          version: "1.0.0"
        }
      }
    },
    {
      plugin: HapiswaggerdUI,
      options: {
        title: "API Example",
        path: '/document',
        authorization: {
          field: 'apiKey',
          scope:'query',
          defaultValue:'demoKey',
          placeholder: 'Enter your apikey here'
        },
        swaggerOptions:{
          validatorUrl: null
        }
      }
    }
  ]);

  server.route(routes);
  try {
    await server.start();
    console.log(`server running at: ${server.info.uri}`)
  }catch (err) {
    console.log(err);
  }

})()
