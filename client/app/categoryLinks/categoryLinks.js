angular.module('hackSource.categoryLinks', [])
// .factory('Cats', function($http) {

//   var getAllCats = function () {
//     return $http({
//       method: 'GET',
//       url: '/api/categories'
//     })
//     .then(function (resp) {
//       return resp.data;
//     });
//   };

//   return {
//     getAllCats: getAllCats
//   };

// })
.controller('CatLinksCtrl', function($scope, Resources, Filters) {

  var initializeCats = function () {
    Resources.getAllCats()
      .then(function (cats) {
        $scope.categories = cats;
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  initializeCats();

  $scope.changeCat = function(category) {
    return Filters.updateCurrentCat(category);
  };

})
.directive('categoryLinks', function() {
  return {
    templateUrl: 'app/categoryLinks/categoryLinks.html'
    // controller: 'CatLinksCtrl'
  };
});