const Joi = require('joi');

const routes = [
  {
    path: '/student/test',
    method: 'GET',
    options: {
      description: 'Learning swagger in hapi.',
      tags: ['api'],
    },
    handler: async (request, h) => {
      return {data: []}
    },
  },

  {
    path: '/foobar/{foo}/{bar}',
    method: 'GET',
    options: {
      description: 'Get the validation data.',
      tags: ['api'],
      validate: {
        params: {
          foo: Joi.string().required().description('test'),
          bar: Joi.string().required()
        }
      }
    },
    handler: async (request, h) => {
      return {}
    }
  }
]

module.exports = routes;
