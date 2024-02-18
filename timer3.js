/*
A timer which behaves in the following way:

* The user can press b and it should beep right away
* The user can input any number from 1 to 9 and it should immediately output "setting timer for x seconds...", and beep after that number of seconds has passed
* The user can use ctrl + c to exit the program, at which point the program
* should say "Thanks for using me, ciao!" before terminating
*/

const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

process.stdout.write(`Enter a number or 'b'\n`);

stdin.on('data', (input) => {
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
  //Print a goodbye message before the program exits
  if (input === '\u0003') {
    process.stdout.write(`Thanks for using me, ciao!\n`);
    process.exit();
  }
});
