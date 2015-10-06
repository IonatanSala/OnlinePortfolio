(function() {
  'use strict';

  angular
    .module('portfolioApp')
    .directive('myNavbar', myNavbar)
    .directive('toggleNavigation', toggleNavigation);

  /** @ngInject */
  function myNavbar() {
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      

      // "vm.creation" is avaible by directive option "bindToController: true"
      // vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

  /** @ngInject */
  function toggleNavigation() {
    var directive = {
      restrict: 'A',
      link: toggleNavigationLink
    }

    return directive;
  }

  /** @ngInject */
  function toggleNavigationLink(scope, elem) {
    // bind the click event to the element
    elem.bind('click', function() {

    });

  }

})();
