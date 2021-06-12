angular.module("surveyApp").directive("userResults", function () {
  //this is a ddo- directive definition object
  return {
    restrict: "E",
    templateUrl: "./directives/userResults/userResults.html",
    scope: false,
    // link: function (scope, elem, attrs) {},
  };
});
