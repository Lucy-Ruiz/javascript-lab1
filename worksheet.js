//slides examples
'use strict';
let firstname = 'Lucy';
console.log(firstname);
console.log(99);
console.log(true);

//Variables.Task1: Days of the week

let dayOfWeek = 'Monday';
console.log(dayOfWeek);

dayOfWeek = 'Friday';

console.log('I can\'t wait for', dayOfWeek);

//Task 2: User Input
 //let animalInput = prompt('What is your favorite animal?')

 //let colorInput = prompt('What\'s your favorite color?')

 //console.log('I\'ve never seen a', colorInput, animalInput)


//Conditionals. Task 1: Meals

let timeOfDay = 2600;

let favoriteMeal;

if (timeOfDay < 1200) 
{
    favoriteMeal = 'scrambbled eggs';
}
else if (timeOfDay >=1200 && timeOfDay < 1700)
{
    favoriteMeal = 'rice with vegetables';
}
else if (timeOfDay >= 1700 && timeOfDay <= 2400)
{
    favoriteMeal = 'mashed potato with vegetables';
}

console.log(favoriteMeal);

//Task 2: Random number

let randomNumber = Math.floor(Math.random() * 11);

if (randomNumber <= 2)
{
    console.log('Beatles');
}
else if (randomNumber >= 3 && randomNumber <= 5)
{
    console.log('Stones');
}
else if (randomNumber >= 6 && randomNumber <= 8)
{
    console.log('Floyd');
}
else
{
    console.log('Hendrix')
}

//'For' loops Task 1 

for (let i = 1; i < 8; i++)
{
    console.log('JavaScript is cool')
}

// Task 2
for (let i = 0; i < 11; i++)
{
    console.log(i)
}

//Task 3
for (let i = 1; i < 6; i++)
{
    console.log('hello');
    console.log('goodbye');
}

//Functions Task 1: Fav Movie

function displayMovie()
{
    let favMovie = 'Gremlins'
    console.log(favMovie)
}
displayMovie()

//Task 2: Favorite Band

function displayBand()
{
    let favBand = prompt('What\'s your favorite band?')
    return favBand
}
let userBand = displayBand()
console.log(userBand)

//Task 3: Concert
function concertDisplay(musicalAct)
{
    let myStreet = prompt('What street do you live in?');
    console.log('It would be great if', musicalAct, 'played a show on', myStreet);
}
concertDisplay(userBand);

//Arrays Task 1: Desktop Items

let desktopItems = ['headphones', 'lamp', 'mouse']
console.log(desktopItems[1]);

desktopItems.push('Infinity Gauntlet');
for(let i = 0; i < desktopItems.length; i++)
{
    console.log(desktopItems[i])
}