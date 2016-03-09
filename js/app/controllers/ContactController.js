function ContactController() {
  var vm = this;
  vm.name = 'Tim';
  vm.email = 'tim@tim.com';
  vm.phone = '1';

  this.changeName = function() {
    vm.name = "Somethign else!"
  }

}

angular
  .module('app')
  .controller('ContactController', ContactController);
