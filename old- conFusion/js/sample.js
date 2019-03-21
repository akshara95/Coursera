var myApp=angular.module("myModule",[]);
myApp.controller("myController",function($scope)
{
  var employee={
    firstName: "david",
    lastName: "John"
  };
  $scope.employee=employee;

  var countries=[
    {
      name:"UK",
      cities:[
        {name:"London"},
        {name:"Australia"},
      ]
    },
    {
    name:"india",
    cities:[
      {name:"Hyderabad"},
      {name:"chennai"},
      {name:"bombay"},
    ]
  }
];
$scope.countries=countries;

var technologies=[
  {name:"Java",likes:0, dislikes:0},
  {name:"C",likes:0, dislikes:0},
  {name:"SQL",likes:0, dislikes:0},
];
$scope.technologies=technologies;

$scope.incrementLikes = function(technology){
  technology.likes++;
}
$scope.incrementDisLikes = function(technology){
  technology.dislikes++;
}
});
