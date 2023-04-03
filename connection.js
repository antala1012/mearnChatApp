const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb+srv://antala1012:euYWxSUGwT4K2BII@cluster0.al3px5g.mongodb.net/?retryWrites=true&w=majority', () => {
  console.log('connected to mongodb')
})
