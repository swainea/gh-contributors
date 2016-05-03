(function() {
    'use strict';

    angular.module('gh')
        .controller('AddressBookController', AddressBookController);

    AddressBookController.$inject = ['GithubService'];
    function AddressBookController(GithubService) {
        var that = this;
        that.repo = 'nodejs/node';
        that.users = [];

        that.lookup = function lookup() {
            GithubService.getCommitters(that.repo)
                .then(function setUsers(users) {
                    console.log('users', users);
                    that.users = users;
                });
        };
    }
})();
