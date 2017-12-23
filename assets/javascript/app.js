
var time = 60;

// Build the form with Questions
function BuildForm() {

    // Answer options and questions
    var ansOptions = ['a', 'b', 'c', 'd'];
    var questions =
        [
            {
                question: "What year was it that the Census Bureau first reported that a majority of new mothers  were remaining in the new job market?",
                choices: ["1968", "1978", "1988", "1970"]
            },

            {
                question: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
                choices: ["William and Elizabeth", "Joseph and Catherine", "John and Mary", "George and Anne"]
            },

            {
                question: "Which of the following items was owned by the fewest U.S. homes in 1990?",
                choices: ["home computer", "compact disk player", "cordless phone", "dishwasher"]
            },

            {
                question: "Who holds the record for the most victories in a row on the professional golf tour?",
                choices: ["Jack Nicklaus", "Arnold Palmer", "Byron Nelson", "Ben Hogan"]
            },

            {
                question: "What did the D in D-Day stand for?",
                choices: ["doom", "day", "Dwight", "Dunkirk"]
            },

            {
                question: "The Brownie Box Camera introduced by Eastman Kodak in 1900 had a retail price of what?",
                choices: ["$1", "$5", "$10", "$20"]
            },
            
            {
                question: "Which of these characters turned 40 years old in 1990?",
                choices: ["Charlie Brown", "Bugs Bunny", "Mickey Mouse", "Fred Flintstone"]
            },
    
            {
                question: "The Philadelphia mint started putting a P mint mark on quarters when?",
                choices: ["1960", "1980", "never", "1956"]
            },
    
            {
                question: "When Mt. St. Helens erupted on May 18, 1980, how many people were killed?",
                choices: ["1", "57", "571", "50"]
            }, 
            
            {
                question: "In J. Edgar Hoover, what did the J stand for?",
                choices: ["James", "John", "Joseph", "Jack"]
            }, 
    
            {
                question: "The Daniel Boon museum at the home where he died can best be described how?",
                choices: ["a log cabin in Kentucky", "a two-story clapboard house in Tennessee", "a four-story Georgian-style home in Missouri", "a three story brick house in Arkansas"],
            },
    
            {
                question: "Who is third behind Hank Aaron and Babe Ruth in major league career home runs?",
                choices: ["Reggie Jackson","Harmon Killebrew", "Willie Mays", "Frank Robinson"]
            }
        ];
        
    //Count down display
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
    $("#btnStart").remove();
    BuildForm();
    intervalId = setInterval(count, 1000);
}

function stop() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
}

function count() {

    $("#displayTime").text("Time Remaining: " + time + " Seconds");
    time--;
    if (time == 0) {
        submitAnswers();
    }
}

function submitAnswers() {

    var total = 12;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    //Get user input
    var q0 = document.forms["quizForm"]["q0"].value;
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;
    var q7 = document.forms["quizForm"]["q7"].value;
    var q8 = document.forms["quizForm"]["q8"].value;
    var q9 = document.forms["quizForm"]["q9"].value;
    var q10 = document.forms["quizForm"]["q10"].value;
    var q11 = document.forms["quizForm"]["q11"].value;

    //Count unanswered questions
    for (var i = 0; i < total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '') {
            unanswered++;
        }
    }

    // Set Correct Answers
    var answers = ["c", "c", "b", "c", "b","a","a","b","b","b","c","c"];

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