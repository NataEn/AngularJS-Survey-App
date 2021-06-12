app.factory("usersFactory", [
  function () {
    const users = [
      {
        firstName: "Dave",
        lastName: "Du",
        surveys: {
          "Your favorite animals": {
            answers: {
              "what animal do you like?": "dog",
              "what kind of animal do you like?": "gards my house",
              "home or outside animal?": "can go outside",
            },
          },
        },
      },
    ];
    const usersFactory = {};
    usersFactory.users = users;
    usersFactory.currentUser = users[0];

    usersFactory.addUser = function (newUser) {
      users.push(newUser);
    };
    usersFactory.handleChosenAnswer = function (
      title,
      questionTitle,
      answerValue
    ) {
      usersFactory.currentUser.surveys[title].questions[questionTitle] =
        answerValue;
    };

    return usersFactory;
  },
]);
