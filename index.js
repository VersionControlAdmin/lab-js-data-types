/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

function tongueTwisterGenerator (wordArray) {
    let tongueTwister ="";
    for (i = 0; i < wordArray.length;i++) {
        tongueTwister +=wordArray[i]+" ";
    }
    return tongueTwister;
}

let wordArrayInitialised = [s1,s2,s3,s4,s5];
finalTongueTwister =tongueTwisterGenerator(wordArrayInitialised);

// Print out the concatenated string

console.log(finalTongueTwister);


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

UppercaseConcattedString = part1.slice(0,3)+part1[3].toUpperCase()+part2.slice(0,5)+part2[5].toUpperCase();

// Print the cameLtaiL-formatted string

console.log(UppercaseConcattedString);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
tipAmount=0.15*billTotal;

// Print out the tipAmount
console.log(tipAmount)



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

randomNumber = Math.floor(Math.random()*10)+1;

// Print the generated random number

console.log(randomNumber);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //false

const expression2 = a || b; //true

const expression3 = !a && b; //false

const expression4 = !(a && b); //true

const expression5 = !a || !b; //true

const expression6 = !(a || b); //false

const expression7 = a && a; // true

expressionArray = [expression1,expression2,expression3,expression4,expression5,expression6,expression7]

for(i=0;i<expressionArray.length;i++) {
    console.log(expressionArray[i]);
}
