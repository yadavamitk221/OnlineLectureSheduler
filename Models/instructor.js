const mongoose = require('mongoose');
const Lectures = require('../Models/lectures');

const instructorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    lectures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lectures' }],
});

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;
