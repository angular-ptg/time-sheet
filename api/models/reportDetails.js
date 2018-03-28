const mongoose = require('mongoose');

const reportDetailsSchema  = mongoose.Schema(
    {"reportData" :[{"empId": String, "name" : String, "email" : String, "role" : String, "hoursDetails":
                 [{"week" : String, "billableHours" : String, "nonBillableHours": String},
                 {"week" : String, "billableHours" : String, "nonBillableHours": String},
                 {"week" : String, "billableHours" : String, "nonBillableHours": String}]},
    {"empId": String, "name" : String, "email" : String, "role" : String, "hoursDetails":
                 [{"week" : String, "billableHours" : String, "nonBillableHours": String},
                 {"week" : String, "billableHours" : String, "nonBillableHours": String},
                 {"week" : String, "billableHours" : String, "nonBillableHours": String}]},
    {"empId": String, "name" : String, "email" : String, "role" : String, "hoursDetails":
                 [{"week" : String, "billableHours" : String, "nonBillableHours": String},
                 {"week" : String, "billableHours" : String, "nonBillableHours": String},
                 {"week" : String, "billableHours" : String, "nonBillableHours": String}]},
    {"empId": String, "name" : String, "email" : String, "role" : String, "hoursDetails":
                 [{"week" : String, "billableHours" : String, "nonBillableHours": String},
                 {"week" : String, "billableHours" : String, "nonBillableHours": String},
                 {"week" : String, "billableHours" : String, "nonBillableHours": String}]},
    {"empId": String, "name" : String, "email" : String, "role" : String, "hoursDetails":
                 [{"week" : String, "billableHours" : String, "nonBillableHours": String},
                 {"week" : String, "billableHours" : String, "nonBillableHours": String},
                 {"week" : String, "billableHours" : String, "nonBillableHours": String}]}]})
module.exports = mongoose.model('ReportDetails', reportDetailsSchema);
