const mongoose = require('mongoose');

const employeeHolidaySchema  = mongoose.Schema({
	AccuralRate  : String,
    AccuredHours : String,
    TotalVacation : String,
    RemainingVaction: String
});
module.exports = mongoose.model('EmployeeHolidayInfo', employeeHolidaySchema);
