function StaffController() {
  this.name = 'Tim Staff';
  this.email = 'Tim@time.come';
  this.phone = '123';
}

angular
  .module('app')
  .controller('StaffController', StaffController);
