var group1 = [
  {
    question1: "You enjoy traveling to new, exotic countries.",

  },
  {
    question2: "You are feeling excited and spontaneous.",

  },
  {
    question3: "You thrive on meeting new people, socializing.",
  
  },
  {
    question4: "You feel like exploring new cultures.",

  }
];

var group2 = [
  {
    question1: "You like order and following a rigid schedule.",

  },
  {
    question2: "You are feeling selective and careful.",

  },
  {
    question3: "You like familiarity.",

  },
  {
    question4: "You are feeling overwhelmed and want something simple.",

  }
];

var group3 = [
  {
    question1: "You would rather have a cozy night in than go out.",

  },
  {
    question2: "You've had a long day and want warmth and comfort.",

  },
  {
    question3:
      "One of your favorites things is to cuddle up next to a fireplace.",

  },
  {
    question4: "You are feeling nostalgic and sentimental.",

  }
];

var group4 = [
  {
    question1: "You are feeling healthy.",
  },
  {
    question2: "You like feeling refreshed and light.",
  },
  {
    question3: "You are feeling fit and pumped.",
  },
  {
    question4: "You enjoy a daily workout.",
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
      // console.log("question is " + questionNumber);
      var groupNumber = eval("group" + i);
      // console.log("group number is " + i);
      //   console.log(groupNumber[questionIndex]);
      questionsArr.push();
      //renders inside home.handlebars
      $("#questions-container").append(
        "<div class='question-option'> <p class='one-question'>" +
          groupNumber[questionIndex][questionNumber] +
          "</p> <select class=" + i + "> <option class='select' value=''>Select</option> <option class='one' value='1'>1</option> <option class='two 'value='2'>2</option><option class='three' value='3'>3</option><option class='four' value='4'>4</option><option class='five' value='5'>5</option></select></div>"
      );
    }
    // console.log(questionsArr);
  }

  displayQuestions();
}

randomizeQuestions();
