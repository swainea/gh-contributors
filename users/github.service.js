(function() {
    'use strict';

    angular.module('gh')
        .factory('GithubService', GithubService);

    GithubService.$inject = ['$http', '$q'];
    function GithubService($http, $q) {
        var _token = null;

        return {
            setUserToken: setUserToken,
            getCommitters: getCommitters
        };

        function setUserToken(token) {
            _token = token;
        }

        function getCommitters(repoName) {
            if (!_token) {
                console.warn('no token!');
                var def = $q.defer();
                def.reject('Please enter your token first');
                return def.promise;
            }

            console.log('getting committers', repoName);

            return $http({
                url: 'https://api.github.com/repos/' + repoName + '/commits?since=2001',
                headers: {
                    Authorization: 'token ' + _token
                }
            }).then(function cullAuthorData(response) {
                console.log(response);
                var authors = [];
                var dupCheck = [];
                response.data.forEach(function loopCommits(commit) {
                    if (commit.author && dupCheck.indexOf(commit.author.login) < 0) {
                        authors.push(commit.author);
                        dupCheck.push(commit.author.login);
                    }
                });
                return authors;
            });
        }
    }

})();
