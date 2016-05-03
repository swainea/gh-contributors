(function() {
    'use strict';

    angular.module('gh')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['GithubService'];
    function HeaderController(GithubService) {
        this.token = GithubService.getUserToken() || '';

        this.saveToken = function saveToken() {
            GithubService.setUserToken(this.token);
        };
    }
})();
