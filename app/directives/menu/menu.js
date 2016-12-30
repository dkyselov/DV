module.exports = function(ngModule) {
  ngModule.directive('menu', menuFn);
  function menuFn() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'directives/menu/menu.html',
      controllerAs: 'vm',
      controller: function() {
        var vm=this;
        vm.menu = ['Home','About As','Contacts','Orders'];
      }
    }
  }
}