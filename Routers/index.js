const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'))
      .use('/instructor', require('./instructor'))
      .use('/course', require('./course'))
      .use('/lecture', require('./lecture'))
      .get('/', (req, res) => {
            res.send('Home Page');
      }); 
      

module.exports = router;