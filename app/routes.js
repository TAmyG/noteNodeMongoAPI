// app/router.js

var notes = require('../api/note');
module.exports = function (router) {

  router.route('/notes')
  .post(function (req, res) {
    notes.addNote(req, res);
  })
  .get(function (req, res) {
    notes.getAllNotes(req, res)
  });

  router.route('*')
  .get(function (req, res) {
    res.render('index', { title: 'Express' });
  });

};
