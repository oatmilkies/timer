//A timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

//Get input from command line
let seconds = process.argv.slice(2);

const timer = function(num) {

  for (let n = 0; n < num.length; n++) {
    //Check that the arguments are a positive number
    if (isNaN(num[n]) || num.length === 0 || num[n] < 0) {
      return;
    } else {
      //Print out an alarm after each specified number of seconds
      setTimeout(() => {
        process.stdout.write(`🚨 ${num[n]} seconds 🚨\n`);
      }, num[n] * 1000);
    }
  }

};


timer(seconds);