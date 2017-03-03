var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StyleTagSchema = new mongoose.Schema({
        _artists: [{type: Schema.Types.ObjectId, ref: 'Artist'}],
        name: {type: String, required: true},
        description: {type: String, required: true},
    }, {timestamps: true});
mongoose.model('StyleTag', StyleTagSchema);
