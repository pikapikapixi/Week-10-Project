function rollDice() {
  // Generate a random number between 1 and 6
  const diceValue = Math.floor(Math.random() * 6) + 1;
  
  return diceValue;
}

const result = rollDice();
console.log(`The dice rolled: ${result}`);


