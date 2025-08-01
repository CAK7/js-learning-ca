let name = "Chaitanya"
let repoCount = 10

/// string interpolation.  :  ${}
/// Back-Ticks             :  ''
console.log(`hello my name is ${name}, I have ${repoCount} in Github`)


/// Second Way
const gameName = new String('Developer')
console.log(gameName);

console.table([
    gameName.length,
    gameName.charAt(4),
    gameName.concat('CA')
])

///------ Example Of removal of symbol --
let url = 'http://develper&&.google.com'

console.log(url.replace('&&',''))

/// example : string slitiing  to array

let fruits = "mango apple kivi"

console.log(fruits.split(' '))