const mongoose = require('mongoose');

const clientInfoSchema  = mongoose.Schema(
    [{name  : String, text    : String},
    {name  : String, text    : String},
    {name  : String, text    : String},
    {name  : String, text    : String},
    {name  : String, text    : String}]
    );
module.exports = mongoose.model('clientInfo', clientInfoSchema);
