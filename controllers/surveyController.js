SurveysController.$inject = ["$scope", "surveysFactory"];
function SurveysController($scope, surveysFactory) {
  $scope.surveys = surveysFactory.surveys;
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
