function rollxDyzaAA (diceRolls, diceType, multiplier, modifier) {
var total = 0; 
for (var i = 1; i <= diceRolls; i++) {
    var roll = Math.floor(Math.random() * diceType +1);
    console.log('roll ' + i + ' was a ' + roll);
    
    total += roll; 
    
    if (roll == diceType) {
        console.log('->rolling an extra exploding dice');
        diceRolls++;
    }
}
total = (total * multiplier) + modifier;
return Math.floor(total)
}
console.log(rollxDyzaAA(3,6,0.5,1));
