angular.module("surveyApp").directive("navbar", function () {
  return {
    restrict: "E",
    templateUrl: "./directives/Navbar/navbar.html",
    scope: false,
  };
});
