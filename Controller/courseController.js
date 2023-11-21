const Course = require('../Models/course');

exports.createCourse = async (req, res) => {
    try {
      const { name, level, description, image } = req.body;
  
      // Create a new course
      const newCourse = new Course({ name, level, description, image });
  
      // Save the course to the database
      await newCourse.save();
  
      res.status(201).json(newCourse);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  exports.getCourse = async (req, res) => {
    try {
      const courses = await Course.find().populate('lectures'); // Populate lectures if you want to include lecture details
      res.json(courses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

 