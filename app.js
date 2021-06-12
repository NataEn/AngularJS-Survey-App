const app = angular.module("surveyApp", ["ngRoute"]);
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

SurveysController.$inject = ["$scope"];
function SurveysController($scope) {
  $scope.test = "test";
  $scope.surveys = [
    {
      title: "Your favorite animals",
      questions: [
        {
          title: "what animal do you like?",
          answers: ["dog", "cat", "hamster", "I don't like animals"],
        },
        {
          title: "what kind of animal do you like?",
          answers: ["furry", "gards my house", "small", "big"],
        },
        {
          title: "home or outside animal?",
          answers: [
            "only home",
            "can go outside",
            "only outside",
            "I don't care",
          ],
        },
      ],
    },
    {
      title: "Your favorite colors",
      questions: [
        {
          title: "what color do you like?",
          answers: ["red", "green", "white", "blue"],
        },
        {
          title: "what kind of color do you wear?",
          answers: ["blue", "pink", "yellow", "green"],
        },
      ],
    },
  ];
  $scope.currentSurvey = $scope.surveys[1];
  $scope.currentSurveyQuestion = $scope.currentSurvey.questions[0];
  $scope.setCurrentSurvey = function (num) {
    $scope.currentSurvey[num];
  };
  $scope.setCurrentQuestion = function (num) {
    const questionsLength = $scope.currentSurvey.questions.length;
    const nextQuestionIndex = questionsLength + num;
    if (nextQuestionIndex > 0 || nextQuestionIndex < questionsLength) {
      $scope.currentSurveyQuestion =
        $scope.currentSurvey.questions[nextQuestionIndex];
    } else $scope.currentSurveyQuestion = $scope.currentSurvey.questions[0];
  };
}
app.controller("SurveysController", SurveysController);
