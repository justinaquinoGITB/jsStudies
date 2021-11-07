// this is a very basic die roller. the objective is to be able to understand the basics
function rollxDyz(diceRolls,diceType,modifier01) {
    // Return total of six-sided dice rolls.
        var total = 0;
    for (var i = 0; i < diceRolls; i++) {
        total += Math.floor(Math.random() * diceType + 1);
    }
  var sum = total +  modifier01;
  var msg = '**'+ sum + '** ([' + diceRolls +'D' + diceType + '] + ' + modifier01 + ')';
  return msg;
}

console.log(rollxDyz(3, 6, -10))
