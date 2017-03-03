var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudioSchema = new mongoose.Schema({
    _artists: [{type: Schema.Types.ObjectId, ref: 'Artist'}],
    studio_name: {type: String, required: true, minlength: 4},
    street_address: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip_code: {type: Number, required: true},
    website: {type: String},
    }, {timestamps: true});

mongoose.model('Studio', StudioSchema);
