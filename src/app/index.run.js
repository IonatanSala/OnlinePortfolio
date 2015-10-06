(function() {
  'use strict';

  angular
    .module('portfolioApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
