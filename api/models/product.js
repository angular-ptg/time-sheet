const mongoose = require('mongoose');

const empSchema  = mongoose.Schema({
	empId  : String,
	pwd    : String
});
module.exports = mongoose.model('EmpData', empSchema);
