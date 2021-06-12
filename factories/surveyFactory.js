app.factory("surveysFactory", [
  function () {
    const surveys = [
      {
        title: "Your favorite animals",
        questions: [
          {
            title: "what animal do you like?",
            answers: [
              { value: "dog", amount: 6 },
              { value: "cat", amount: 2 },
              { value: "hamster", amount: 5 },
              { value: "I don't like animals", amount: 2 },
            ],
          },
          {
            title: "what kind of animal do you like?",
            answers: [
              { value: "furry", amount: 3 },
              { value: "gards my house", amount: 3 },
              { value: "small", amount: 5 },
              { value: "big", amount: 1 },
            ],
          },
          {
            title: "home or outside animal?",
            answers: [
              { value: "only home", amount: 2 },
              { value: "can go outside", amount: 6 },
              { value: "only outside", amount: 1 },
              { value: "I don't care", amount: 2 },
              ,
            ],
          },
        ],
      },
      {
        title: "Your favorite colors",
        questions: [
          {
            title: "what color do you like?",
            answers: [
              { value: "red", amount: 1 },
              { value: "green", amount: 8 },
              { value: "white", amount: 1 },
              { value: "blue", amount: 2 },
            ],
          },
          {
            title: "what kind of color do you wear?",
            answers: [
              { value: "blue", amount: 5 },
              { value: "pink", amount: 6 },
              { value: "yellow", amount: 1 },
              { value: "green", amount: 4 },
            ],
          },
        ],
      },
    ];
    const surveysFactory = {};

    surveysFactory.add = function (newSurvey) {
      surveys.push(newSurvey);
    };
    surveysFactory.surveys = surveys;
    surveysFactory.handleChosenAnswer = function (
      surveyIndex,
      questionIndex,
      answerIndex
    ) {
      surveysFactory.surveys[surveyIndex].questions[questionIndex].answers[
        answerIndex
      ].amount += 1;
    };

    return surveysFactory;
  },
]);
