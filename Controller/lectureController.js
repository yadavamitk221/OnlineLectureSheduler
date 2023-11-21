const Lecture = require('../Models/lectures');

exports.createLecture = async (req, res) => {
    try {
      const { title, date, description, course, instructor } = req.body;
      // Check if the instructor already has a lecture on the given date
      const existingLecture = await Lecture.findOne({ instructor, date });
  
      if (existingLecture) {
        return res.status(400).json({ error: 'Instructor already has a lecture on this date.' });
      }
  
      // Create a new lecture
      const newLecture = new Lecture({ title, date, description, course, instructor });
  
      // Save the lecture to the database
      await newLecture.save();
  
      res.status(201).json(newLecture);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  exports.getLecture = async (req, res) => {
    try {
      const lectures = await Lecture.find().populate('course instructor'); // Populate course and instructor details if needed
      res.json(lectures);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }