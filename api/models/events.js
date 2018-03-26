const mongoose = require('mongoose');

const eventSchema  = mongoose.Schema(
    [{title: String, start: String},
    {title: String, start: String, color: String},
    {title: String, start: String, color: String},
    {title: String, start: String, color: String},
    {title: String, start: String, color: String}]);
module.exports = mongoose.model('Event', eventSchema);
