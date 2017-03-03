var mongoose = require('mongoose');

var StyleTag = mongoose.model('StyleTag');

console.log('StyleTag controller');
module.exports = {
  index: function(req,res){
    StyleTag.find({}).populate('_artists').exec(function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
  },
  create: function(req,res){
    var newStyleTag = new StyleTag(req.body);
        console.log(newStyleTag);
        newStyleTag.save(function(err, data) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                res.json(data)
            }
        });
  },
  search: function(req, res){
    StyleTag.findOne({name: req.params.styleTagSearchString}).populate({path: '_artists', populate: {path: '_studio'}, populate: {path: '_styles'}}).exec(function(err, data) {
        if (err) {
          res.json(err);
        } else {
            console.log(data);
          res.json(data);
        }
    });
},
  // update: function(req,res){
  //   console.log(req.params, req.body);
  //   // Model*.findOne({_id: req.params.id}, function(err, data) {
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
  // delete: function(req,res){
  //   // Model*.findOne({_id: req.params.id}, function(err, data) {
  //     if (err) {
  //       console.log(err);
  //       res.json(err);
  //     } else {
  //       // Model*.remove(data, function(error, datum) {
  //         if (error) {
  //           console.log(error);
  //           res.json(error);
  //         } else {
  //           console.log(datum);
  //           res.json(datum);
  //         }
  //       })
  //     }
  //   })
  // },
  show: function(req,res){
    console.log(req.params);
    StyleTag.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(data);
      }
    })
  }
}
