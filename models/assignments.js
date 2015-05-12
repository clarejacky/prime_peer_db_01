var mongoose = require('mongoose');

var assignmentsSchema = new mongoose.Schema({
    name: String,
    score: Double,
    rank: Double,
    dateCompleted: Date
});

module.exports = mongoose.model('assignments', assignmentsSchema);