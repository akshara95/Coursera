'use strict';

angular.module('confusionApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider)
{
  $stateProvider
  .state("app",{
    url:'/',
    views:
    {
      'header':{
        templateUrl : 'templates/header.html'
      },
      'content': {
                    templateUrl : 'templates/ass3Home.html',
                    controller  : 'IndexController'
                },
      'footer':{
        templateUrl : 'templates/footer.html'
      }
    }
  })
  .state('app.aboutus', {
            url:'aboutus',
            views: {
                'content@': {
                    templateUrl: 'templates/ass3Aboutus.html',
                    controller  : 'AboutController'
               }
            }
        })
                // route for the contactus page
        .state('app.contactus', {
            url:'contactus',
            views: {
                'content@': {
                    templateUrl : 'templates/contactusTemplate.html',
                    controller  : 'ContactCotroller'
                 }
            }
        })

        // route for the menu page
        .state('app.menu', {
            url: 'menu',
            views: {
                'content@': {
                    templateUrl : 'templates/dishDetail.html',
                    controller  : 'MenuController'
                }
            }
        })

        // route for the dishdetail page
        .state('app.dishdetails', {
            url: 'menu/:id',
            views: {
                'content@': {
                    templateUrl : 'templates/dishdetail.html',
                    controller  : 'menuController'
               }
            }
        });
        $urlRouterProvider.otherwise('/');
  });
