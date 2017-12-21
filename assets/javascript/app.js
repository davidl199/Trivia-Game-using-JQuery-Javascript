
var time = 180;

function BuildForm() {

var ansOptions = ['a', 'b', 'c', 'd'];
var questions =
    [
        {
            question: "What year was it that the Census Bureau first reported that a majority of new mothers  were remaining in the new job market?",
            choices: ["Vicki", "Jane", "Karen", "Martha"],
        },

        {
            question: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
            choices: ["James", "Mark", "Bobby", "David"],
        },

        {
            question: "The Daniel Boon museum at the home where he died can best be described how?",
            choices: ["James", "Mark", "Bobby", "David"],
        },

         {
            question: "Which of the following items was owned by the fewest U.S. homes in 1990?",
            choices: ["xxxx", "xxxxx", "xxxx", "xxxxx"],
        },

        {
            question: "Who holds the record for the most victories in a row on the professional golf tour?",
            choices: ["xxxx", "xxxxx", "xxxx", "xxxxx"],
        },

        {
            question: "Who is third behind Hank Aaron and Babe Ruth in major league career home runs?",
            choices: ["xxxx", "xxxxx", "xxxx", "xxxxx"],
        },

        {
            question: "What did the D in D-Day stand for?",
            choices: ["xxxx", "xxxxx", "xxxx", "xxxxx"],
        },

        {
            question: "The Brownie Box Camera introduced by Eastman Kodak in 1900 had a retail price of what?",
            choices: ["xxxx", "xxxxx", "xxxx", "xxxxx"],
        },

        {
            question: "Which of these characters turned 40 years old in 1990?",
            choices: ["xxxx", "xxxxx", "xxxx", "xxxxx"],
        },

        {
            question: "The Philadelphia mint started putting a P mint mark on quarters when?",
            choices: ["xxxx", "xxxxx", "xxxx", "xxxxx"],
        },

        {
            question: "When Mt. St. Helens erupted on May 18, 1980, how many people were killed?",
            choices: ["xxxx", "xxxxx", "xxxx", "xxxxx"],
        }, 
        
        {
            question: "In J. Edgar Hoover, what did the J stand for?",
            choices: ["xxxx", "xxxxx", "xxxx", "xxxxx"],
        }, 

        {
            question: "Florence Nightingale became known as the Lady With the Lamp during which war?",
            choices: ["xxxx", "xxxxx", "xxxx", "xxxxx"],
        },

        {
            question: "What year was it that the Census Bureau first reported that a majority of new mothers  were remaining in the new job market?",
            choices: ["xxxx", "xxxxx", "xxxx", "xxxxx"],
        },
    ];


$("#displayTime").text("Time Remaining: " + time);
// Access the form
var frm = $('form[name="quizForm"');

// Add all the questions and multiple choice options to form
for (var i = 0; i < questions.length; i++) {
    $("<h3/>", {
        text: questions[i].question
    }).appendTo(frm);

    var options = questions[i].choices;
    console.log(options);
    for (var j = 0; j < options.length; j++) {
        //var x = $('<input type="radio">' + options[j] + '</input>');
        var x = $('<input type="radio" name=q' + i + ' value=' + ansOptions[j] + '>' + options[j] + '</input>');
        frm.append(x);
        
    }
    var br = $('<br><br>')
        frm.append(br);
}

// Add the submit button to the form
frm.append('<br><br>');
var submitBtn = $('<input type="submit" value="Submit Answers"/>');
frm.append(submitBtn);

}


function start() {

    //Use setInterval to start the count here and set the clock to running.
    //if (!clockRunning) {
    $("#btnStart").remove();
    BuildForm();
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
    $("#displayTime").text("Time Remaining: " + time + " Seconds");
    time--;
    if (time == 0) {
        //stop();
        //$("section").empty();
        //$("form").empty();
        //$("#displayTime").empty();
        submitAnswers();
        
    }
}

function submitAnswers() {
    //alert("submitted");
    var total = 2;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    //Get user input
    var q0 = document.forms["quizForm"]["q0"].value;
    var q1 = document.forms["quizForm"]["q1"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;
    var q7 = document.forms["quizForm"]["q7"].value;
    var q8 = document.forms["quizForm"]["q8"].value;
    var q9 = document.forms["quizForm"]["q9"].value;
    var q10 = document.forms["quizForm"]["q10"].value;
    var q11 = document.forms["quizForm"]["q11"].value;
    var q12 = document.forms["quizForm"]["q12"].value;
    var q13 = document.forms["quizForm"]["q13"].value;
    var q14 = document.forms["quizForm"]["q14"].value;
    var q15 = document.forms["quizForm"]["q15"].value;
    var q16 = document.forms["quizForm"]["q16"].value;
    var q17 = document.forms["quizForm"]["q17"].value;

    for (var i = 0; i < total; i++) {
        //alert("missed");
        if (eval('q' + i) == null || eval('q' + i) == '') {
            
            unanswered++;
            //alert('you missed questions ' + i);
            //var results = document.getElementById("results");
            //results.innerHTML('<h3>You missesed' + i + 'questions</h3>');
            //return false
        }
    }

    // Set Correct Answers
    var answers = ["a", "a"];

    //check answers
    for (var i = 0; i < total; i++) {
        if (eval('q' + i) == answers[i]) {
            correct++;
        }
        else {
            incorrect++;
        }
    }

    $("form").empty();
    stop();
    $("#displayTime").empty();
    //var results = document.getElementById("results");
    //results.innerHTML = '<h3>You scored ' + score + ' Out of ' + total + '</h3>';
    //results.appendChild('<h3>You scored ' + score + ' Out of ' + total + '</h3>');
    var done = $('<h2>All Done!</h2>');
    
    var correctTotal = $('<h3>Correct Answers: ' + correct + ' </h3>');
    var incorrectTotal = $('<h3>Incorrect Answers: ' + incorrect + ' </h3>');
    var unansweredTotal = $('<h3>Unanswered: ' + unanswered + ' </h3>');
    $("#results").append(done);
    $("#results").append(correctTotal);
    $("#results").append(incorrectTotal);
    $("#results").append(unansweredTotal);

    return false;

}

$("#btnStart").on("click", function () {
    start();    
});

/* var frm = $('form[name="quizForm"');
var q1 = "whats your fathers name?"
var question = $('<h3>' + q1 + '</h3>');
var value = "a";
var create = $('<input type="radio" name="radiobtn">' + Yourtext + '</input>');
////$('<input type="radio" name="radiobtn" >Yourtext'+i+'</input>')
frm.append(question);
frm.append(create);  */

/////////// This works for an individual test /////////////////////////////////
/* var frm = $('form[name="quizForm"');
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
  //$("<strong>hello</strong>").insertAfter("input"); */

  /* for (var i = 0; i < total; i++) {
        if (eval('q' + i) == answers[i - 1]) {
            score++;
        }
    } */

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

    /* <h3>1. What is your Mothers Name?</h3>
    <input type="radio" name="q1" value="a" id="q1a">Jane
    <br>
    <input type="radio" name="q1" value="b" id="q1b">Vicki
    <br>
    <input type="radio" name="q1" value="c" id="q1c">Martha
    <br>
   <input type="radio" name="q1" value="d" id="q1d">Karen
    <br>
    <h3>2. What is your Fathers Name?</h3>
    <input type="radio" name="q2" value="a" id="q2a">Mark
    <br>
    <input type="radio" name="q2" value="b" id="q2b">James
    <br>
    <input type="radio" name="q2" value="c" id="q2c">George
    <br>
    <input type="radio" name="q2" value="d" id="q2d">Larry
    <br>
    <h3>3. What is your Wifes Name?</h3>
    <input type="radio" name="q3" value="a" id="q3a">Elaina
    <br>
    <input type="radio" name="q3" value="b" id="q3b">Vicki
    <br>
    <input type="radio" name="q3" value="c" id="q3c">Martha
    <br>
    <input type="radio" name="q3" value="d" id="q3d">Karen
    <br>
    <h3>4. What is your Brothers Name?</h3>
    <input type="radio" name="q4" value="a" id="q4a">Mark
    <br>
    <input type="radio" name="q4" value="b" id="q4b">Bobby
    <br>
    <input type="radio" name="q4" value="c" id="q4c">James
    <br>
    <input type="radio" name="q4" value="d" id="q4d">Larry
    <br>
    <h3>4. What is your Dogs Name?</h3>
    <input type="radio" name="q5" value="a" id="q5a">Lacey
    <br>
    <input type="radio" name="q5" value="b" id="q5b">Ella
    <br>
    <input type="radio" name="q5" value="c" id="q5c">Chester
    <br>
    <input type="radio" name="q5" value="d" id="q5d">Larry
    <br>
    <br>
    <input type="submit" value="Submit Answers"> */