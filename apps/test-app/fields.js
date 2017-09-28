'use strict';

module.exports = {
  country: {
    mixin: 'radio-group',
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    },
    options: [{
      value: 'northern-ireland'
    }, {
      value: 'scotland'
    }, {
      value: 'england'
    }, {
      value: 'wales'
    }]
  },
  'firstName': {
    validate: [
      'required',
      'alphanum'
    ]
  },
  'lastName': {
    validate: [
      'required',
      'alphanum'
    ]
  }
};
