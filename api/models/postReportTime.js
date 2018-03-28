const mongoose = require('mongoose');

const postReportTimeSchema  = mongoose.Schema(
    [{repType: String, monday: Number, tuesday : Number, wednesday : Number, thursday : Number, friday : Number, saturday : Number, sunday : Number},
    {repType: String, monday: Number, tuesday : Number, wednesday : Number, thursday : Number, friday : Number, saturday : Number, sunday : Number}]);
module.exports = mongoose.model('PostReportTime', postReportTimeSchema);
