angular.module('hackSource', [
  'ngMaterial',
  'hackSource.services',
  'hackSource.cards',
  'hackSource.cardList',
  'hackSource.categoryLinks',
  'hackSource.vote'
])
.run(function() {
  console.log('Moving path of app');
});