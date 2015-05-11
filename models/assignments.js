var mongoose = require('mongoose');

var assignmentsSchema = new mongoose.Schema({
    name: String,
    score: Number,
    rank: Number,
    dateCompleted: Date
});

module.exports = mongoose.model('assignments', assignmentsSchema);