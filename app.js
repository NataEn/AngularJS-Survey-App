const app = angular.module("surveyApp", ["ngRoute"]);
//router
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      controller: "SurveysController",
      template: "1234",
      // templateUrl: "directives/surveysList/surveysList.html",
    })
    .when("/test", {
      template: "test",
    })
    .when("surveys/:surveyId", {
      controller: "SurveysController",
      templateUrl: "directives/survey/survey.html",
    })
    .otherwise({ redirectTo: "/" });
});
