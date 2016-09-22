var allPlayers;

// $(document).ready(function(){
//   console.log('something');
//   $.ajax({
//     url: "https://api.fantasydata.net/nfl/v2/JSON/FantasyPlayers?Team=PIT" ,
//     beforeSend: function(xhrObj){
//         // Request headers
//         xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","630f356526af4b368fe08040535f6dda");
//     },
//     type: "GET",
//     success: function(data){
//       allPlayers = data;
//       console.log(allPlayers);
//       // for(var i = 0; i < 200; i++){
//       //
//       // }
//     }
//   })
//   .done(function(data) {
//     alert("success");
//   })
//   .fail(function() {
//     alert("error");
//   });
// });

var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function($scope, $http){
  console.log("in angular");
  console.log(allPlayers);
  $http({
    url: "https://api.fantasydata.net/nfl/v2/JSON/FantasyPlayers?Team=PIT",
    headers: {"Ocp-Apim-Subscription-Key": "630f356526af4b368fe08040535f6dda"},
    method: 'GET'
  }).then(function(response){
    allPlayers = response.data;
    console.log(allPlayers);
  });
}]);
