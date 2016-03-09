function ContactController() {
  var vm = this;
  vm.name = 'Tim';
  vm.email = 'tim@tim.com';
  vm.phone = '1';

  this.changeName = function() {
    vm.name = "Somethign else!"
  }

  this.changeEmail = function() {
    vm.email = "don'tcontactme@gmail.com"
  }

  this.changePhone = function() {
    vm.phone = '345'
  }

}

angular
  .module('app')
  .controller('ContactController', ContactController);
