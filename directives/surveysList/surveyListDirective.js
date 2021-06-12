angular.module("surveyApp").directive("surveyList", function () {
  //this is a ddo- directive definition object
  return {
    restrict: "E",
    templateUrl: "./directives/surveysList/surveyList.html",
    scope: false,
    // link: function (scope, elem, attrs) {},
  };
});
