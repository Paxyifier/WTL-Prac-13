var app = angular.module("myApp", ["ngRoute"]);
const articles = [
    {
      id: 1,
      title: 'Valorant',
      imguri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.riotgames.com%2Fen%2Fnews%2Fstarting-the-valorant-journey&psig=AOvVaw0YKv5hlWZIz7AVy5fVVLZf&ust=1675837268369000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJimz8Digv0CFQAAAAAdAAAAABAD',
      content: `Valorant is a tactical first-person shooter game that was released by Riot Games in 2020. The game is set in a dystopian future where players control a squad of agents with unique abilities. Each agent has different abilities and weapons, and players must work together to complete objectives and eliminate the enemy team.

      The game features two modes: the standard game mode, where teams of five players compete against each other in a best-of-25 rounds format, and Spike Rush, a casual game mode with shorter rounds and more ability usage. Valorant has received praise for its tight, skill-based gameplay, strategic elements, and for being well-optimized for low-end computers.
      
      The game also has a strong emphasis on gunplay and tactical decision making, making it appealing to both casual and competitive players. Valorant has become a popular game in the esports scene and has a thriving community ofstreamers and content creators. The game features a variety of maps, each with different layouts and challenges, and new maps and agents are added regularly through updates.

      In addition to the standard game modes, Valorant also has a comprehensive in-game economy system where players can earn in-game currency through play and use it to purchase cosmetic items such as weapon skins and player card designs. The game also has a battle pass system that allows players to earn rewards as they progress through levels.
      
      Overall, Valorant has been well-received by both players and critics for its engaging gameplay, strategic elements, and its emphasis on teamwork. The game continues to grow in popularity and has a dedicated player base.`
    },
    {
      id: 2,
      title: 'Fortnite',
      imguri: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/12/19BR_BattlePass-920x518.jpg',
      content: `Fortnite is a popular online game that combines elements of survival, exploration, and building. In addition to the Battle Royale mode, the game also includes the Creative mode, where players have unlimited resources and can build and create their own worlds and games, and the Save the World mode, where players work together to survive against waves of monsters.

      One of the unique aspects of Fortnite is its building mechanics, which allow players to construct structures and use them for defensive purposes or to reach high places. This has led to a large number of creative players who build intricate structures and designs.
      
      The game also features a large number of cosmetic items, including skins, emotes, and other items that players can purchase with real money or earn through gameplay. These cosmetic items have become a huge part of the game's culture, and players often use them to express themselves and show off their style.
      
      Fortnite has a large, dedicated player base and is known for its colorful and cartoonish graphics, fast-paced action, and constant updates and events. The game has also been used for major cross-promotions, including collaborations with Marvel, Star Wars, and the NFL, among others.
      
      Overall, Fortnite has become a cultural phenomenon and has had a major impact on the gaming industry and popular culture.`
    },
    {
      id: 3,
      title: 'Call of Duty : Warzone',
      imageuri:'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg',
      content: `Call of Duty Warzone is a battle royale game set in the Call of Duty universe. It is a free-to-play game that is available on Windows, Xbox, PlayStation, and PlayStation 5. In Warzone, players drop onto a large map and must gather resources and weapons while trying to be the last person or team standing.

      The game features a variety of weapons and equipment, including both standard weapons and specialist equipment that can be earned through play or purchased with in-game currency. Warzone also has a variety of vehicles, including cars, trucks, and helicopters, which players can use to traverse the map and gain the upper hand over their opponents.
      
      One of the unique features of Warzone is its Plunder mode, where players collect cash and try to reach a set amount before their opponents. This mode adds a new level of strategy to the game and requires players to make choices about when to spend their money and when to save it.
      
      Call of Duty Warzone has received praise for its large player count, fast-paced action, and for being well-optimized for low-end computers. The game has a large, dedicated player base and has become one of the most popular battle royale games on the market. The game is constantly updated with new content, including weapons, maps, and game modes, to keep players engaged.
      
      Overall, Call of Duty Warzone is a well-designed battle royale game that offers a fast-paced, action-packed experience for players of all skill levels.`
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
  $scope.articles = articles; 
  $scope.goToArticle = function(id) {
    $location.path('/article/' + id);
  }
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