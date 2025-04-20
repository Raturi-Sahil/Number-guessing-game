const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random()*(maxNum - minNum + 1) + minNum);

console.log(answer);

let attempts = 0; 
let guess;
let running = true;

while(running) {

    guess = window.prompt(`Select a number between ${minNum} - ${maxNum}`);
    guess = parseInt(guess);
    
    if(isNaN(guess)) {
        window.alert("Invalid! Please enter a number");
    } else if (guess < minNum || guess > maxNum) {
        window.alert(`Please select a number between ${minNum} - ${maxNum}`);
    }
    else {
        console.log(answer, guess);
        if(guess < answer) {
            window.alert("TOO LOW!, TRY AGAIN");
        } else if (guess > answer) {
            window.alert("TOO HIGH!, TRY AGAIN");
        } else {
            window.alert(`CORRECT! The answer was ${answer}. It took you ${guess}gusses to get the correct answer.`);
            running = false;
        }
    }

            
}   