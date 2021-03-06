angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']).run(function($ionicPlatform) {
  return $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      return StatusBar.styleDefault();
    }
  });
}).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  }).state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  }).state('tab.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        templateUrl: 'templates/tab-chats.html',
        controller: 'ChatsCtrl'
      }
    }
  }).state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  }).state('tab.friends', {
    url: '/friends',
    views: {
      'tab-friends': {
        templateUrl: 'templates/tab-friends.html',
        controller: 'FriendsCtrl'
      }
    }
  }).state('tab.friend-detail', {
    url: '/friend/:friendId',
    views: {
      'tab-friends': {
        templateUrl: 'templates/friend-detail.html',
        controller: 'FriendDetailCtrl'
      }
    }
  }).state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });
  return $urlRouterProvider.otherwise('/tab/dash');
});

angular.module('starter.controllers', []).controller('DashCtrl', (function($scope) {})).controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  return $scope.remove = function(chat) {
    return Chats.remove(chat);
  };
}).controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  return $scope.chat = Chats.get($stateParams.chatId);
}).controller('FriendsCtrl', function($scope, Friends) {
  return $scope.friends = Friends.all();
}).controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  return $scope.friend = Friends.get($stateParams.friendId);
}).controller('AccountCtrl', function($scope) {
  return $scope.settings = {
    enableFriends: true
  };
});

angular.module('starter.services', []).factory('Chats', function() {
  var chats;
  chats = [
    {
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way? updated',
      face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey,it\'s me',
      face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
      id: 2,
      name: 'Andrew Jostlin',
      lastText: 'Did you get the ice cream?',
      face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
    }, {
      id: 3,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
      id: 4,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
    }
  ];
  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      return chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      var chat, i, len;
      for (i = 0, len = chats.length; i < len; i++) {
        chat = chats[i];
        if (chat.id === parseInt(chatId)) {
          return chat;
        }
      }
      return null;
    }
  };
}).factory('Friends', function() {
  var friends;
  friends = [
    {
      id: 0,
      name: 'Ben Sparrow',
      notes: 'Enjoys drawing things',
      face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      notes: 'Odd obsession with everything',
      face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
      id: 2,
      name: 'Andrew Jostlen',
      notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
      face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
    }, {
      id: 3,
      name: 'Adam Bradleyson',
      notes: 'I think he needs to buy a boat',
      face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
      id: 4,
      name: 'Perry Governor',
      notes: 'Just the nicest guy',
      face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
    }
  ];
  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      return friends[friendId];
    }
  };
});
