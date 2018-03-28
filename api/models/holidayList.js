const mongoose = require('mongoose');

const holidayListSchema  = mongoose.Schema(
	[{Date: String,
    Occation : String}]);
module.exports = mongoose.model('HolidayList', holidayListSchema);
