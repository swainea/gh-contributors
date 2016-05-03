(function() {
    'use strict';

    angular.module('gh', ['ui.router'])
        .config(ghConfig);

    ghConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function ghConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'users/address-book.template.html',
                controller: 'AddressBookController',
                controllerAs: 'addr'
            });
    }

})();
