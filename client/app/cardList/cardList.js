angular.module('hackSource.cardList', [])
.controller('cardListCtrl', function($scope, Data) {

  $scope.sortType = 'createdAt'; // set the default sort type
  $scope.sortReverse = false;  // set the default sort order

  // Sort functionality
  $scope.sortBy = function(sortParam) {
    $scope.sortType = sortParam;
    $scope.sortReverse = !$scope.sortReverse;
  };

})
.directive('myCardList', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/cardList/cardList.html'
  };
});