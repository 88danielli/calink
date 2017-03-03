var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtistSchema = new mongoose.Schema({
        name: {type: String, required: true},
        portfolio: {type: String, required: true},
        social_media: {type: String, required: true},
        years_experience: {type: Number, required: false},
        home: {type: String, required: false},
        languages: [{type: String, required: false}],
        phone: {type: String, required: false},
        email: {type: String, required: false},
        _styles: [{type: Schema.Types.ObjectId, ref:'StyleTag'}],
        _studio: {type: Schema.Types.ObjectId, ref: 'Studio'},
    }, {timestamps: true});
mongoose.model('Artist', ArtistSchema);
