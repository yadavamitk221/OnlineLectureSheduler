const express = require('express');
const {createCourse, getCourse} = require('../Controller/courseController');
const router = express.Router();

router.post('/create-course',createCourse)
      .get('/get-course', getCourse)

module.exports = router;