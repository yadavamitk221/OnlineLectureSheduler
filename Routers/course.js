const express = require('express');
const {createCourse, getCourse} = require('../Controller/courseController');
const router = express.Router();
const passport = require("passport");

router.post('/create-course',passport.authenticate('jwt') , createCourse)
      .get('/get-course',passport.authenticate('jwt') ,getCourse)

module.exports = router;