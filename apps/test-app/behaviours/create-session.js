'use strict';

module.exports = superclass => class extends superclass {

  getValues(req, res, callback) {
    req.form.values = {
      username: 'Michael',
      firstName: 'Michael',
      lastName: 'Allen'
    };
    super.saveValues(req, res, callback);
  }

  render(req, res) {
    res.redirect('/hello-world');
  }
};

