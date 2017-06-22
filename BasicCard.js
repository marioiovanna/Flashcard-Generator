
var inquirer = require("inquirer");

var currentQ = 6;
var allQuest = 0;
var answerR = 0;
var answerW = 0;
var questArray = [];
var answArray = [];

// create questions and send them to arrays
function popUp() {
function ShowCard(front, back) {
    this.back = back;
    questArray.push(front);
    answArray.push(back);
}

// questions ONLY 6
var presidente = new ShowCard (' ... was the first president of the United States.', 'George Washington' );
var movie = new ShowCard('... won the Oscar for best picture at the 2016 Academy Awards.', 'Moonlight');
var  newPresident = new ShowCard('... is the current president of the United States.', 'Donald Trump');
var disney = new ShowCard('Which character was Walt Disney’s favorite?', 'Goofy');
var disney2 = new ShowCard('How old is Ariel when she marries Eric in “The Little Mermaid?"', '16');
var worldCup = new ShowCard('What country will host the next winter Olympic games in 2018?', 'South Korea');
};

// FUNCTION  TO START GAME
function ask() {
    inquirer.prompt([
        {
            type: 'input',
            message: questArray[0],
            name: 'userGuess'
        }

        // Answer actions
    ]).then(function(answer) {

        // correct answer
        if (answer.userGuess.toLowerCase() === answArray[0].toLowerCase()) {
            answerR++;
            allQuest++;
            currentQ--;
            console.log('*****************');
            console.log('  THAT\'S RIGHT  ');
            console.log('*****************');
        }

        // incorrect answer
        else {
            answerW++;
            allQuest++;
            currentQ--;
            console.log('');
            console.log('*****************');
            console.log('    INCORRECT    ');
            console.log('*****************');
            console.log('Right answer was: \n' + answArray[0]);
            console.log('******************\n');
        }

        // remove index from array ... and do next question
        questArray.shift();
        answArray.shift();

        // next question
        if (currentQ > 0) {
            ask()
        }

        // stop questions and ask ...
        else if (currentQ === 0) {
            console.log('    GAME OVER\n' + 'Correct Answers = ' + answerR + '\n' + 'Wrong Answers = ' + answerW + '\n');

            // ask if want to replay game
            inquirer.prompt([
                {
                    type: 'confirm',
                    message: 'Would you like to play again?',
                    name: 'playAgain'
                }
            ]).then(function (answers) {

                // replay game ?????
                if (answers.playAgain) {
                    allQuest = 0;
                    answerR = 0;
                    answerW = 0;
                    currentQ = 6;

                    popUp();
                    ask();
                }

                // no replay game
                else {
                    console.log('');
                    console.log('************************');
                    console.log('*  Thanks for playing! *');
                    console.log('************************');
                }
            });
        }
    });
}

// Iniciate game first time
popUp();
ask();