(function() {
  'use strict';

  angular
    .module('portfolioApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this; 

    vm.hi = "How are you";
  }
})();
