var app = angular.module("myApp", ["ngRoute"]);
const articles = [
    {
      id: 1,
      title: 'Valorant',
      content: 'Article 1 content'
    },
    {
      id: 2,
      title: 'Article 2',
      content: 'Article 2 content'
    },
    {
      id: 3,
      title: 'Article 3',
      content: 'Article 3 content'
    }
];
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeController'
        })
        .when('/articles', {
            templateUrl: 'articles/articles.html',
            controller: 'ArticlesController'
        })
        .when('/article/:id', {
            templateUrl: 'articles/article.html',
            controller: 'ArticleController'
        })
        .when('/contact', {
            templateUrl: 'contact/contact.html',
            controller: 'ContactController'
        })
        .when('/about', {
            templateUrl: 'aboutme/aboutme.html',
            controller: 'AboutMeController'
        })
        .otherwise({ redirectTo: '/' });
});
app.controller('HomeController', function($scope) {
    $scope.message = 'Hello from HomeController';
    
  });
  
  app.controller('ArticleController', function($scope, $route, $routeParams, $location) {
    $scope.article = articles.find(function(article) {
      return article.id === parseInt($routeParams.id);
    });
    $scope.goBack = function() {
      $location.path('/articles');
    }
  });
  app.controller('ArticlesController', function($scope, $route, $routeParams, $location) {
    $scope.articles = articles; 
    $scope.goToArticle = function(id) {
      $location.path('/article/' + id);
    }
  });
  
  app.controller('ContactController', function($scope) {
    $scope.message = 'Hello from ContactController';
  });
  app.controller('AboutController', function($scope) {
    $scope.message = 'Hello from AboutController';
  });