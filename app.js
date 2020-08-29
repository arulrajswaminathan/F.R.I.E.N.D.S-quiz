function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>"+"<br><h2><a href='result.html' id='score3' color = '#000000'>VIEW RESULT</a></h2><br><h2 id = 'score2'>Comeback again when we create bamboozled!</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is Monica's apartment number?", ["20", "21","23", "24"], "20"),

    new Question("What is Joey's penguin's name?", ["Waddle","Pugsy","Huggsy","Steve"], "Huggsy"),
    

    new Question("Who does Ross meet in China?", ["Rachel","Carol","Julie","Mona"], "Julie"),
    

    new Question("What character does Joey play in the soap opera Days of Our Lives?", ["Dr. Drake Ramoray","Mac","Richard Crosby","Kevin"], "Dr. Drake Ramoray"),
    
    new Question("What is the name of Rachel and Monica's downstairs neighbour?", ["Mr. Heckles","Mr. Treeger","Fun Bobby","Gary"], "Mr. Heckles"),
    
    new Question("What colour is the couch that the friends sit on at Central Perk?", ["Orange","Red","Green","Brown"], "Orange"),
    
    new Question("What was the name of the barista-turned-manager of Central Perk?", ["Gunther","Mike","Gary","Bobby"], "Gunther"),
    
    new Question("What did Ross name his white-headed pet capuchin monkey?", ["Marcella","Marcel","Macarena","Marcy"], "Marcel"),
    
    new Question("How many categories of towels does Monica have?", ["10","11","12","13"], "11"),

    new Question("What is the name of Joey's agent?", ["Estelle", "Edith","Rosita", "Casy"], "Estelle"),        

];


var quiz = new Quiz(questions);


populate();





