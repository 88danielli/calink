var styleTag = require('./../controllers/styleTags.js');
var artist = require('./../controllers/artists.js');
var studio = require('./../controllers/studios.js');
module.exports = function(app) {

    // Routes for styleTag methods //
  app.get('/styleTags', function(req, res) {
    styleTag.index(req, res);
  })
  app.get('/styleTags/:id', function(req, res) {
    styleTag.show(req, res);
  })
  app.post('/styleTags', function(req, res) {
    styleTag.create(req, res);
  })
  app.get('/search/:styleTagSearchString', function(req, res) {
    styleTag.search(req, res);
  })
  // app.put('/model*/:id', function(req, res) {
    // model*.update(req, res);
  // })
  // app.delete('/model*/:id', function(req, res) {
  //   model*.delete(req, res);
  // })


  // Routes for artist methods//
  app.get('/artists', function(req,res) {
    artist.index(req,res);
  })
  app.post('/artists', function(req,res) {
    artist.create(req, res);
  })
  app.get('/artists/:id', function(req, res) {
    artist.show(req, res);
  })
  app.delete('/artists/:id', function(req, res) {
    artist.delete(req, res);
    })

    // Routes for studio methods//
  app.get('/studios', function(req, res) {
    studio.index(req,res);
    })
  app.post('/studios', function(req, res) {
    studio.create(req, res);
  })
  app.get('/studios/:id', function(req, res) {
    studio.show(req, res);
  })




}
