const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/multiChat', { useNewUrlParser: true ,useUnifiedTopology: true});
mongoose.Promise = global.Promise;

export default  mongoose;