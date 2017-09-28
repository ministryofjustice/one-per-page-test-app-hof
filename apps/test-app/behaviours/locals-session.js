'use strict';

module.exports = superclass => class extends superclass {
  locals(req, res) {
    const session = req.sessionModel.toJSON();
    const sessionJSON = JSON.stringify(session);
    return Object.assign({}, super.locals(req, res), {session, sessionJSON});
  }
};

