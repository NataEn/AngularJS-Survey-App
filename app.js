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
  $scope.currentSurveyIndex = 0;
  $scope.currentSurveyQuestionIndex = 0;
  $scope.setCurrentSurveyIndex = function (setNum) {
    $scope.currentSurvey[num];
  };
  $scope.incrementCurrentQuestionIndex = function (setNum) {
    const num = Number(setNum);

    const questionsLength =
      $scope.surveys[$scope.currentSurveyIndex].questions.length;
    const nextQuestionIndex = $scope.currentSurveyQuestionIndex + num;

    if (num > 0 && nextQuestionIndex < questionsLength - 1) {
      $scope.currentSurveyQuestionIndex = nextQuestionIndex;
    } else {
      $scope.currentSurveyQuestionIndex = 0;
    }
  };

  $scope.decrementCurrentQuestionIndex = function (setNum) {
    const num = Number(setNum);

    const questionsLength =
      $scope.surveys[$scope.currentSurveyIndex].questions.length;
    const nextQuestionIndex = $scope.currentSurveyQuestionIndex + num;

    if (num < 0 && nextQuestionIndex >= 0) {
      $scope.currentSurveyQuestionIndex = nextQuestionIndex;
    } else {
      $scope.currentSurveyQuestionIndex = questionsLength - 1;
    }
  };
}
app.controller("SurveysController", SurveysController);
