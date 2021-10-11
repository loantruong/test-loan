const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

control()

function control() {
  // ask question 
  rl.question("Entrez l'opération à calculer ", function (userInput){
    // split string operator
    const tab = userInput.split(' ');
    // close app
    if(userInput.endsWith('#13#10') || userInput.endsWith('#10')) {
      rl.close()
    } else {
      // call calculator 
      console.log(calculator(tab))
      control() // call back control
    }
  }) 
}

function calculator(tab) {
  const [nbA, operator, nbB] = tab; 
  const a = Number(nbA);
  const b = Number(nbB);
  switch (operator) {
    case '-':
      return a - b;
    case '+':
      return a + b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      console.log(`Oups, il semble y avoir un problème avec l'opérateur saisi ${operator}.`);
  } 
}
