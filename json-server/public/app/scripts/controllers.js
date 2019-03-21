.controller('menuController' , function($scope, menuFactory)
 {
   var dishes=[
    {
      name:'Uthapizza',
     image: 'images/uthapizza.png',
      category: 'mains',
      label:'Hot',
      price:'4.99',
     description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',

   },
 ];
 $scope.dishes=dishes;
 $scope.feedback={firstName:"", rating:"5" , comments:"",date:""};

 $scope.submitComment = function()
 {
   $scope.comment.date=new Date.toISOString();
   $scope.dishes.comments.push($scope.feedback);
   $scope.feedbackForm.$setPristine();
   console.log(dishes);
   $scope.feedback={firstName:"", rating:"5" , comments:"", date:""};

 };

 })
 .controller('dishController' , function($scope)
 {

   $scope.comments=menuFactory.getcomments();

})
