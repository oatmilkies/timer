/*
A timer which behaves in the following way:

* The user can press b and it should beep right away
* The user can input any number from 1 to 9 and it should immediately output "setting timer for x seconds...", and beep after that number of seconds has passed
* The user can use ctrl + c to exit the program, at which point the program
* should say "Thanks for using me, ciao!" before terminating
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Prompt the user for input
rl.setPrompt("Enter a number or 'b': ");
rl.prompt();

rl.on('line', (input) => {
  //Beep right away if user inputs 'b'
  if (input === "b") {
    process.stdout.write(`🚨 BEEP!!! 🚨\n`);
    //Set timer if user inputs a number
  } else if (/\d/.test(input)) {
    process.stdout.write(`setting timer for ${input} seconds...\n`);
    //Print after the timer has finished
    setTimeout(() => {
      process.stdout.write(`🚨 ${input} seconds 🚨\n`);
    }, input * 1000);
  }  
});

//Print a goodbye message before the program exits
rl.on('SIGINT', () => {
  process.stdout.write(`Thanks for using me, ciao!\n`)
  rl.close()
});