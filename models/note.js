// models/quote.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var NoteSchema = new mongoose.Schema({
	title: 'string',
	content: 'string',
	author: 'string'
});


module.exports = mongoose.model('Note', NoteSchema);
