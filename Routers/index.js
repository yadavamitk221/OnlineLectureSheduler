const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'))
      .use('/instructor', require('./instructor'))
      .use('/course', require('./course'))
      .use('/lecture', require('./lecture'))
      

module.exports = router;