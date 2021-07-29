// let userQuest=prompt('What is your Quest?');

// function getUserQuest(){
//     if (userQuest == 'the holy grail'.toLowerCase()) {
//         confirm("Right, off you go
//         ");
//     }
//     else confirm("You Shall Not Pass!");
// }

// getUserQuest(); 

// let userOpinion=prompt("Monty Python Still Holds Up Doesn't It? YES or NO");

// function mockUserOpinion() {
//     if (userOpinion == 'yes'.toLowerCase()) {
//         confirm("Too bad John Cleese is an anti-cancel culture guy now");
//     }
//     else confirm("You just don't appreciate the subtleties of British humor");
// }

// mockUserOpinion();

// function randomNumber(){
//     // found solution at https://www.codegrepper.com/code-examples/javascript/js+random+number+between+1+and+100
//     let randNum = Math.floor(Math.random() * 500) + 1;
//     return randNum

function howManyLickstotheCenter(){
    correctAnswer = 3 ;
    console.log(correctAnswer);
    // number of guesses
    let guesses = 2;            //  i = i + 1
    for(let i = 0; i < guesses; i++){
        let guessLeft = guesses - i
        let userGuess = parseInt(prompt('How many licks does it take to get to the center of a tootsie pop? Hint: Either very few or a lot. You have ' + guessLeft + ' guesses left!'));
        while(userGuess < 1 || userGuess > 500){
            userGuess = parseInt(prompt('Read directions next time and enter a number between 1-500'))
        }
        if(userGuess == correctAnswer){
            alert('Winner, Winner, Chicken Dinner!');
            break;
        } else if(userGuess > correctAnswer){
            alert("Get off the reefer son because you're way too high!");
        } else if(userGuess < correctAnswer){
            alert("Is this how many licks it takes YOU to get to the center? Maybe next time try one or two more...");
        }
        else {
            alert('seriously wtf')
        }
    }
}

howManyLickstotheCenter();

function tateRtot(){
    let numberOfTates = prompt('How many tatertots could Tate R. Tot tate, if Tate R. Tot could tate tots?')
    for(let i = 0; i < numberOfTates; i++){
        document.write('<img src=https://pbs.twimg.com/media/E7f3ynWVIAAuSB3?format=jpg>')
    }
}

tateRtot(); 