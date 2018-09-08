var group1 = [
  {
    question1: "You enjoy traveling to new, exotic countries.",
    groupId: 1
  },
  {
    question2: "You are feeling excited and spontaneous.",
    groupId: 2
  },
  {
    question3: "You thrive on meeting new people, socializing.",
    groupId: 3
  },
  {
    question4: "You feel like exploring new cultures.",
    groupId: 4
  }
];

var group2 = [
  {
    question1: "You like order and following a rigid schedule.",
    groupId: 1
  },
  {
    question2: "You are feeling selective and careful.",
    groupId: 2
  },
  {
    question3: "You like familiarity.",
    groupId: 3
  },
  {
    question4: "You are feeling overwhelmed and want something simple.",
    groupId: 4
  }
];

var group3 = [
  {
    question1: "You would rather have a cozy night in than go out.",
    groupId: 1
  },
  {
    question2: "You've had a long day and want warmth and comfort.",
    groupId: 2
  },
  {
    question3:
      "One of your favorites things is to cuddle up next to a fireplace.",
      groupId: 4
  },
  {
    question4: "You are feeling nostalgic and sentimental.",
    groupId: 5
  }
];

var group4 = [
  {
    question1: "You are feeling healthy.",
    groupId: 1
  },
  {
    question2: "You like feeling refreshed and light.",
    groupId: 2
  },
  {
    question3: "You are feeling fit and pumped.",
    groupId: 3
  },
  {
    question4: "You enjoy a daily workout.",
    groupId: 4
  }
];

var group5 = [
  {
    question1: "You enjoy studying/working in a social setting."
  },
  {
    question2:
      "You're tired of working/studying at home and want a change of environment."
  },
  {
    question3: "You need a snack."
  },
  {
    question4: "You feel like stepping out for a short break."
  }
];

function randomizeQuestions() {
  var randomNumber;
  var questionIndex;
  var questionNumber;

  //gives us a random number to access the question index
  function getRandomNumber() {
    randomNumber = Math.round(Math.random() * 3) + 1;
    questionIndex = randomNumber - 1;
  }
  //decalare an array to store random questions one from each group
  var questionsArr = [];

  //console logs the questions
  function displayQuestions() {
    for (var i = 1; i < 6; i++) {
      getRandomNumber();
      questionNumber = "question" + randomNumber;
      console.log("question is " + questionNumber);
      var groupNumber = eval("group" + i);
      console.log("group number is " + i);
      //   console.log(groupNumber[questionIndex]);
      questionsArr.push();
      $("#questions-container").append(
        "<p>" + groupNumber[questionIndex][questionNumber] + "</p"
      );
    }
    console.log(questionsArr);
    // for (var i = 0; i <= 4; i++) {
    //   //   console.log("questionNumber is " + questionNumber);
    //   console.log(questionsArr[i][questionNumber]);
    //   $("#questions-container").append(
    //     "<p>" + questionsArr[i][questionNumber] + "</p"
    //   );
    // }
  }
  //display the questions on the home page

  displayQuestions();
}

randomizeQuestions();
