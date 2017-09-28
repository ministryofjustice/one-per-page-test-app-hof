'use strict';

module.exports = superclass => class extends superclass {
  locals(req, res) {
    return Object.assign({refNumber: 'HDJ2123F'}, super.locals(req, res));
  }
};
