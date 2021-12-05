const router = require('express').Router();
const verify = require('../middlewares/privateRoute');
const mongoose = require('mongoose');

router.get('/',verify, (req, res,next) => {
  res.json({
    message: 'Hello World!',
    title: 'OffMe',
    description: 'A simple social media app',
    user: req.user
  }); 
  next();
});
module.exports = router;