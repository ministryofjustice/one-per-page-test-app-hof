'use strict';

module.exports = superclass => class extends superclass {
  render(req, res) {
    /* eslint-disable handle-callback-err */
    // and the error handling would be a good idea!
    req.sessionStore.all((error, sessions) => {
      const indentTwoSpaces = 2;
      res.send(JSON.stringify(sessions, null, indentTwoSpaces));
    });
  }
};
