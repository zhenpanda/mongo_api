var mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String},
  password: String
});

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;
