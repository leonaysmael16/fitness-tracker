const mongoose = require('mongoose');

const connectionDB = () => {
    mongoose.connect(
        process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false
        }
      )};

module.exports = connectionDB;      