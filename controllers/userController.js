UsersController.$inject = ["$scope", "usersFactory"];
function UsersController($scope, usersFactory) {
  $scope.users = usersFactory.users;
  $scope.currentUser = usersFactory.currentUser;
}
app.controller("UsersController", UsersController);
