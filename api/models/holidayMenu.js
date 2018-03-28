const mongoose = require('mongoose');

const holidayMenuSchema  = mongoose.Schema(
    [{Name  : String},
    {Name : String}]);
module.exports = mongoose.model('holidayMenu', holidayMenuSchema);
