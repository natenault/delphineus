angular.module('hackSource.cardList', [])
.controller('cardListCtrl', function($scope, Data, Resources, Filters) {

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

  $scope.sortType = 'createdAt'; // set the default sort type
  $scope.sortReverse = false;  // set the default sort order

  // Sort functionality
  $scope.sortBy = function(sortParam) {
    $scope.sortType = sortParam;
    $scope.sortReverse = !$scope.sortReverse;
  };

  $scope.selectedCat = Filters.getCurrentCat();

  // $scope.selectedCat = function() {
  //   Filters.updateCurrentCat();
  // };
  // $scope.selectedCat();

})
.directive('myCardList', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/cardList/cardList.html'
  };
})
.filter('filterByCat', function () {
  return function (items, searchCat) {
    var filtered = [];

    if (!searchCat) {
      return items;
    }

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var itemCats = [];

      item.Categories.forEach(function(cat) {
        itemCats.push(cat.title);
      });

      if (itemCats.indexOf(searchCat) !== -1) {
        filtered.push(item);
      }
    }
    return filtered;
  };
});