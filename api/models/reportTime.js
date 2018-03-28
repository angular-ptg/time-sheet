const mongoose = require('mongoose');

const reportTimeSchema  = mongoose.Schema(
    [{repType: String, monday: Number, tuesday : Number, wednesday : Number, thursday : Number, friday : Number, saturday : Number, sunday : Number},
    {repType: String, monday: Number, tuesday : Number, wednesday : Number, thursday : Number, friday : Number, saturday : Number, sunday : Number}]);
module.exports = mongoose.model('ReportTime', reportTimeSchema);
