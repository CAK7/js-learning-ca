//// Premitive Type ////
/// 7 types : Number, BigInt, string, boolean, null, undefined, symbol

const id = 10
const pi = 714n
let name = "chaitanya"
isCheck = true
let score;  // Undefined
let next = null 
let sym = Symbol("brand")

console.table([typeof id, typeof pi, typeof name, typeof isCheck, typeof score, typeof next, typeof sym]);


////---- Referance (Non Primitive) -- All Return Type Object

//// Array, Object, Functions

const nums = [1 , 4, 7, 2]   // Return Type Object

let myObj = {
    id : 1,
    name : "chaitanya"
}

const myFunc = function(){
    console.log("This is My Function");
    
}

console.log([nums, typeof nums, myObj, typeof myObj,myFunc, typeof myFunc]);

//// ---------------------------------------------------------------------////
////   ------------------------ Memories ---------------------------------////

//// Stack(Premitive) , Heap(Non-Premitive)

/// Stack Example - A copy created and change made in copy not in referance
let Post1 = "SofteWareDeveloper"
let Post2 = Post1
Post2 = "Tester"

console.table([Post1,Post2]);

// Referance : Change Made in Referance No copy

let Obj1 = {
    id : "1",
    name : "Chaitanya"

}

let obj2 =  Obj1
obj2.name = "Rohan"

console.table([Obj1,obj2])  // Both Objects value got Changed