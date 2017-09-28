'use strict';

const urls = require('./urls');

const localsSession = require('./behaviours/locals-session');

module.exports = {
  name: 'test-app',
  baseUrl: '/',
  steps: {
    '/start': {
      template: 'start',
      next: '/country',
      locals: {
        urls
      }
    },
    '/country': {
      fields: ['country'],
      next: '/name',
      forks: [{
        target: '/exit-northern-ireland',
        condition: {
          field: 'country',
          value: 'northern-ireland'
        }
      }]
    },
    '/name': {
      fields: ['firstName', 'lastName'],
      next: '/confirm'
    },
    '/confirm': {
      behaviours: ['complete', require('hof-behaviour-summary-page')],
      next: '/exit'
    },
    '/exit': {
      template: 'confirmation',
      behaviours: [localsSession, require('./behaviours/exit')]
    },
    '/exit-northern-ireland': {
      template: 'exit-northern-ireland'
    },
    '/create-session': {
      behaviours: [require('./behaviours/create-session')],
    },
    '/hello-world': {
      behaviours: [localsSession],
      template: 'hello-world'
    },
    '/sessions': {
      behaviours: [require('./behaviours/sessions')]
    }
  }
};
