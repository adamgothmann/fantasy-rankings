var myApp=angular.module( 'myApp', [] );

myApp.controller('mainController', ['$scope', '$http', function($scope, $http){
  var allPlayers;
  $http({
    url: "https://api.fantasydata.net/nfl/v2/JSON/FantasyPlayers?Team=PIT",
    headers: {"Ocp-Apim-Subscription-Key": "630f356526af4b368fe08040535f6dda"},
    method: 'GET'
  }).then(function(response){
    allPlayers = response.data;
    console.log(allPlayers);
    console.log(allPlayers[2].Position);
  });
  $scope.name = 'something';
  console.log($scope.name);
}]);
