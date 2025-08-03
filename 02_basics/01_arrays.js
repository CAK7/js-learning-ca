//// ----- Arrays ------

const nums = [2,4,7,3,8];
const names = ["Chaitanya","Rohan"]
const num2 = new Array(4,6,5);

console.log('Original Value : '+ num2);

//// Arrays Method
num2.push(9)
num2.push(8)

console.log('New Value : ' + num2);
num2.pop()
console.log('New Value : ' + num2);

/// Adding elemt to first
num2.unshift(7)
console.log('Unshift : ' + num2);
/// Removing from first
num2.shift()
console.log('Shift : ' + num2);

/// Value EXistance
console.log(num2.includes(5));

/// Index Check
console.log(num2.indexOf(5))

/// Array to String 
console.log(num2.join('|'));

/// slice and Spilce 
console.log(num2.slice(1)); // Dont Manupulate Original Array
console.log(num2.splice(1,2)) // Deletion happen in original Array

console.log(num2);


