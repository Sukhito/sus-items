var app = angular.module('suus',['ui.router','ui.bootstrap','focus-if','ui.sortable']);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
    $urlRouterProvider.otherwise('/');
    
    $stateProvider

        .state('items',{
            url: '/items',
            templateUrl: 'js/items/index.html',
            controller: 'ItemsCtrl'
        })
        .state('item',{
            url: '/items/:itemId',
            templateUrl: 'js/items/item/index.html',
            controller: 'ItemCtrl'
        })
        .state('item-edit',{
            url: '/items/:itemId/edit',
            templateUrl: 'js/items/edit-item/index.html',
            controller: 'ItemEditCtrl'
        })
        .state('item-new',{
        	url: '/items/new',
            templateUrl: 'js/items/new-item/index.html',
            controller: 'ItemNewCtrl'
        })
        .state("otherwise",{
            url: '',
            templateUrl: 'navigation.html'
        })


    
    $locationProvider.hashPrefix('');
});