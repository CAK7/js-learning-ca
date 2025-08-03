const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//// Direct Push
//dc_heros.push(marvel_heros)

//console.log(dc_heros);

/// Concat
const allHearos = marvel_heros.concat(dc_heros)
console.log(allHearos)

/// Spread Operation   : used for multiple array concat
const new_all_hearos = [...dc_heros,...marvel_heros]
console.log(new_all_hearos);

//// Flatten operation
const messArray = [1,2,4,[5,7,8], 9,[10,11,[12,13]]]
console.log(messArray.flat(Infinity))

//// array cHECK
console.log(Array.isArray(messArray));

//// Array From & of Metods
console.log(Array.from("CHAITANYA"))

let num1 = 100
let num2 = 200
let num3 = 300

console.log(Array.of(num1,num2,num3))

