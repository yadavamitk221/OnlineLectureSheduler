const express = require("express");
const router = express.Router();
const { createLecture, getLecture } = require("../Controller/lectureController");
const passport = require("passport");

router
  .post("/create-lecture",passport.authenticate('jwt') , createLecture)
  .get('/get-lecture', passport.authenticate('jwt'), getLecture)

module.exports = router;
