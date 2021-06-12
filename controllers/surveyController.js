SurveysController.$inject = ["$scope", "surveysFactory", "usersFactory"];
function SurveysController($scope, surveysFactory, usersFactory) {
  $scope.surveys = surveysFactory.surveys;
  $scope.currentSurveyIndex = 0;
  $scope.currentSurveyQuestionIndex = 0;

  $scope.setCurrentSurveyIndex = function (setNum) {
    $scope.currentSurvey[setNum];
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
  $scope.handleChosenAnswer = function (title, chosenQuestion, chosenAnswer) {
    const surveyIndex = surveysFactory.surveys.findIndex(
      (survey) => survey.title === title
    );
    const questionIndex = surveysFactory.surveys[
      surveyIndex
    ].questions.findIndex((question) => question.title === chosenQuestion);
    const answerIndex = surveysFactory.surveys[surveyIndex].questions[
      questionIndex
    ].answers.findIndex((answer) => answer.value === chosenAnswer);

    surveysFactory.handleChosenAnswer(surveyIndex, questionIndex, answerIndex);
    usersFactory.handleChosenAnswer(title, chosenQuestion, chosenQuestion);
  };
}
app.controller("SurveysController", SurveysController);
