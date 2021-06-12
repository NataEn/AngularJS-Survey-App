app.factory("surveysFactory", [
  function () {
    const surveys = [
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
    const surveysFactory = {};

    surveysFactory.add = function (newSurvey) {
      surveys.push(newSurvey);
    };
    surveysFactory.surveys = surveys;

    return surveysFactory;
  },
]);
