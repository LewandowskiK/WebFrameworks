const mongoose = require('mongoose');

const stopSchema = new mongoose.Schema({
    name: {type: String,
        default: ""},
    x: {type: Number},
    y: {type: Number}
});

const busSchema = new mongoose.Schema({
    name: {type: String, required: true},
    locations: [{type: String}],
    stops: [stopSchema],
});

mongoose.model('Bus',busSchema);