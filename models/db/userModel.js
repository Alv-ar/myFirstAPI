const mongoose = require(`mongoose`);
const userSchema = mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
});
module.exports = mongoose.model(`User`, userSchema);
