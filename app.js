console.log("My small app that adds two numbers!")

//A Variable name that stores 1st and 2nd number.

let num1 = 100;
let num2 = 50;

let addition = console.log (num1 + num2);
let subtraction = console.log (num2 - num1);
let multiply = console.log (num1 * num2);
let divide = console.log (num1 / num2);
let power = console.log(num1 ** 2);
let mod = console.log(num1 % num2);

let isTrue = false;
console.log(isTrue);


let firstname = "Aire";
let lastname = "Emmanuel";
let fullname = `${firstname} ${lastname}`;
let uppercase = fullname.toUpperCase();

console.log(uppercase);

let favactor = "Nnaji Genevieve";
let comment = `${favactor} best show is silicon valley`;
console.log(comment)


let money = "50";

//money = parseInt(money);

console.log(typeof (money))

let dollar = "20";

dollar = toString(dollar);

console.log(typeof (dollar));

let a = 20;
let b = 20;

if (a > b) {
    console.log("a is greater than b")
} else if (a < b ) {
    console.log("b is greater than a")
} else if(a == b){
    console.log("a is equal to b")
} else if(a != b){
    console.log("a is not equal to b")
}

let time = 11;
let greetings;

if (time == 10 || time < 10) {
    greetings = "Good morning"
    console.log(greetings)
} else if (time == 10 || time < 11) {
    greetings = "Good afternoon"
    console.log(greetings)
} else if (time == 11 || time < 12) {
    greetings = "Good evening"
    console.log(greetings)
} else {
    console.log("Please select a valid time range")
}

let fruit = "Apple"

switch (fruit) {
    case "Banana":
        console.log("Banana is good");
        break
    case "Orange":
        console.log("I am not a fan of orange")
        break;
    case "Apple":
        console.log("How you like them apples")
        break;
    default:
        console.log("I don't have that fruit stored in my database.")

}

for (let i = 0; i <= 10; i++) {
    console.log(`Hello guys, i is ${i}`)
    for (let j = 0; j <= 5; j++)
    console.log(`Let us start again with ${j}`)
}

let my_name = 10;

while (my_name <= 100) {
    console.log(`Aire-oje Emmnauel ${my_name}`)
    my_name++;
}

let second_name = 20;

do {
    console.log(`Emmanuel ${second_name}`);
    second_name++;
} while (second_name <= 400);