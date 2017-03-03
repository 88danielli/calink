var mongoose = require('mongoose');

var Artist = mongoose.model('Artist');
var StyleTag = mongoose.model('StyleTag');
var Studio = mongoose.model('Studio');

console.log('Artist controller');
module.exports = {
  index: function(req,res){
    Artist.find({}).populate('_styles').populate('_studio').exec(function(err, data) {
        if (err) {
            console.log(err);
        } else {
            // console.log(data,"this is data*******");
            res.json(data);
        }
    });
  },
  create: function(req,res){
    var newArtist = new Artist(req.body);
        console.log(req.body,"******req.body****");

    // newArtist.languages = req.body.languages; ADD HERE FOR LANGUAGES FUNCTIONALITY
    newArtist._styles = req.body.styles;
    newArtist._studio = req.body.studio;

    newArtist.save(function(err, data) {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            // console.log(data,"here is the saved data*******");
            for (style in req.body.styles) {
                console.log(style,"style here !!!!");
                StyleTag.findOne({_id: req.body.styles[style]}, function(err, data) {
                    console.log(data,"the tag to add artists to *********");
                  data._artists.push(newArtist._id);
                  data.save(function(err, datum) {
                    if (err) {
                      console.log(err);
                      res.json(err);
                    }
                  })
            })
          }
        }
        Studio.findOne({_id: req.body.studio}, function(err, data) {
          data._artists.push(newArtist._id);
          data.save(function(err, datum) {
            if (err) {
              console.log(err);
              res.json(err);
            }
          })
        })
      res.json(data);
    });
    // console.log(newArtist._styles,"styles to be added here *****");

  },
  // update: function(req,res){
  //   console.log(req.params, req.body);
  //   Model*.findOne({_id: req.params.id}, function(err, data) {
  //     for (var i in req.body) {
  //       if (data[i] && data[i] !== req.body[i]) {
  //         data[i] = req.body[i];
  //       }
  //     }
  //     data.save(function(err, data) {
  //       if (err) {
  //         console.log(err);
  //         res.json(err);
  //       } else {
  //         res.json(data);
  //       }
  //     })
  //   })
  // },
  delete: function(req,res){
    Artist.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        Artist.remove(data, function(error, datum) {
          if (error) {
            console.log(error);
            res.json(error);
          } else {
            console.log(datum);
            res.json(datum);
          }
        })
      }
    })
  },
  show: function(req,res){
    console.log(req.params);
    Artist.findOne({_id: req.params.id}).populate('_studio').populate('_styles').exec(function(err, data){
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(data);
        }
    })
  }
}
