app.factory('StyleTagFactory', function($http) {
  console.log('StyleTag Factory loaded');
  var factory = {};

  factory.index  = function(callback) {
    $http.get('/styleTags').then(function(res) {
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }
  factory.search = function(styleTagSearchString, callback) {
      if (styleTagSearchString == undefined) {
        $http.get('/styleTags').then(function(res) {
          if (typeof callback === 'function') {
            callback(res.data);
          }
        })
    } else {
        $http.get('/search/'+styleTagSearchString).then(function(res) {
            if (typeof callback === 'function') {
              callback(res.data);
            }
        })
    }

  }
  factory.show = function(id, callback) {
    $http.get('/styleTags/'+id).then(function(res) {
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }
  factory.create = function(newStyleTag, callback) {
    $http.post('/styleTags/', newStyleTag).then(function(res) {
      console.log(res.data);
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }
  // factory.update = function(survey, callback) {
  //   $http.put('/survey/'+survey._id, survey).then(function(res) {
  //     if (typeof callback === 'function') {
  //       callback(res.data);
  //     }
  //   })
  // }
  // factory.delete = function(survey, callback) {
  //   $http.delete('/survey/'+survey._id).then(function(res) {
  //     console.log(res.data);
  //     if (typeof callback === 'function') {
  //       callback(res.data);
  //     }
  //   })
  // }

  return factory;
})
