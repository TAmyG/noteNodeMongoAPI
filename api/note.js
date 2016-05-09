// api/Note.js

var Note = require('../models/note');
var JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports.getAllNotes = function (req, res) {
  Note.find(function (err, data) {
    if (err) {
      res.send({error: err});
    }

    var NotesSerializer = new JSONAPISerializer('notes', {
      id: '_id',
      attributes: ['title', 'content', 'author']
    });

    var notes = NotesSerializer.serialize(data);
    res.send(notes);
  });
};

module.exports.addNote = function (req, res) {
  var note = new Note(req.body.note);
  note.save(function (err) {
    if (err) {
      res.send({error: err});
    }

    var NoteSerializer = new JSONAPISerializer('note', {
      id: '_id',
      attributes: ['title', 'content', 'author'],
      pluralizeType: false
    });
    var newNote = NoteSerializer.serialize(note);
    res.send(newNote);
  });
};
