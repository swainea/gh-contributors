(function() {
  'use strict';

  angular.module('gh')
    .directive('ghDetails', GhDetails);


  function GhDetails (){
    return{
      restrict: 'A',
      templateUrl: "users/details.template.html",
      scope: {
        users: "=info"
      }
    };
  }
}());
