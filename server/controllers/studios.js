var mongoose = require('mongoose');

var Studio = mongoose.model('Studio');

console.log('Studio controller');
module.exports = {
  index: function(req,res){
    Studio.find({}).populate('_artists').exec(function(err, data) {
        if (err) {
            console.log(err);
        } else {
            // console.log(data,"this is data*******");
            res.json(data);
        }
    });
  },
  create: function(req,res){
    var newStudio = new Studio(req.body);
        console.log(newStudio);
        newStudio.save(function(err, data) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                res.json(data)
            }
        });
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
  // delete: function(req,res){
  //   Artist.findOne({_id: req.params.id}, function(err, data) {
  //     if (err) {
  //       console.log(err);
  //       res.json(err);
  //     } else {
  //       Artist.remove(data, function(error, datum) {
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
    Studio.findOne({_id: req.params.id}).populate({path: '_artists', populate: {path: '_styles'}}).exec(function(err, data){
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(data);
        }
    })
  }
}
