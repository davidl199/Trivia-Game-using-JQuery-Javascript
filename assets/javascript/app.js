
var time = 30;

var ansOptions = ['a','b','c','d'];
var questions =
[
  {
      question: "What is your mothers name?",
      choices: ["Vicki", "Jane", "Karen", "Martha"],
      answer: "a"
  },

  {
      question: "What is your fathers name?",
      choices: ["James", "Mark", "Bobby", "David"],
      answer: "a"
  }

];

//////////// Example ///////////////////////////////////
/* var container = document.getElementById('container');
for (var i = 0; i < questions.length; i++) {
    var questionContainer = document.createElement('DIV');
    questionContainer.textContent = questions[i].question;

    var options = questions[i].choices;
    for (var opt in options) {
        //create radiobutton
        //append radiobutton to a div 
    }
    container.appendChild(questionContainer);
} */

var frm = $('form[name="quizForm"');
for (var i = 0; i < questions.length; i++) {
    $("<h3/>", {
        text: questions[i].question
      }).appendTo(frm);

      var options = questions[i].choices;
      console.log(options);
      for (var j = 0; j < options.length; j++) {
        //var x = $('<input type="radio">' + options[j] + '</input>');
        var x = $('<input type="radio" name=q' + i + ' value=' + j + '>' + options[j] + '</input>');
         frm.append(x);
      }
} 

/* var frm = $('form[name="quizForm"');
var q1 = "whats your fathers name?"
var question = $('<h3>' + q1 + '</h3>');
var value = "a";
var create = $('<input type="radio" name="radiobtn">' + Yourtext + '</input>');
////$('<input type="radio" name="radiobtn" >Yourtext'+i+'</input>')
frm.append(question);
frm.append(create);  */

var frm = $('form[name="quizForm"');
var q1 = "Whats your fathers name?";
var choice = "James";
var a = 'a';
var name = 'q1';
//$('form[name="quizForm"').innerHTML($('<h3></h3>'),{text: 'hello'});

$("<h3/>", {
    text: "Whats your fathers name?"
  }).appendTo(frm);

 var x = $('<input type="radio" name=' + name + ' value=' + a + '>' + choice + '</input>');
 //var x = $('<input/>').attr({ type: 'radio', name:'rad',});
  frm.append(x);
  //$("<strong>hello</strong>").insertAfter("input");





function start() {

    //Use setInterval to start the count here and set the clock to running.
    //if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    //clockRunning = true;
    //}
}

function stop() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
}

function count() {
    //alert("in count");
    $("#displayTime").text("Time Remaining: " + time);
    time--;
    if(time == 0) {
        stop();
        $("section").empty();
    }    
}

function submitAnswers() {
    var total = 5;
    var score = 0;

    //Get user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    //alert(q1);

    //validation


    for (var i = 1; i <= total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '') {
            alert('you missed questions ' + i);
            return false
        }
    }

    // Set Correct Answers
    var answers = ["b", "b", "a", "a", "a"];

    //check answers
    for (var i = 1; i <= total; i++) {
        if (eval('q' + i) == answers[i - 1]) {
            score++;
        }
    }

    //display results
    var results = document.getElementById("results");
    results.innerHTML = '<h3>You scored ' + score + ' Out of ' + total + '</h3>';
    //alert('you scored' + score + 'out of ' + total);

    return false;

}

//start();