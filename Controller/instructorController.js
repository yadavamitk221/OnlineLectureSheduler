const Instructor = require('../Models/instructor');

exports.createInstructor = async (req, res) => {
    try {
      const { name, email } = req.body;
      
      // Check if the instructor with the provided email already exists
      const existingInstructor = await Instructor.findOne({ email });
  
      if (existingInstructor) {
        return res.status(400).json({ error: 'Instructor with this email already exists.' });
      }
  
      // Create a new instructor
      const newInstructor = new Instructor({ name, email });
  
      // Save the instructor to the database
      await newInstructor.save();
  
      res.status(201).json(newInstructor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  exports.getAllInstructor = async(req, res) =>{
    try {
        const instructors = await Instructor.find();
        res.json(instructors);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  }