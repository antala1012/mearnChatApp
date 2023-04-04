const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://antala1012:euYWxSUGwT4K2BII@cluster0.al3px5g.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// },
//   () => {
//     console.log("mongdb is connected");
//   })

//   const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://antala1012:antala2001@cluster0.lp7wcml.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Not connected'));

db.once('open', (err) => {
  if (err) {
    console.log("db not connected");
    return "failed";
  }
  console.log("db is connceted");

});

module.exports = db;
