//// Ways of Declaration
// literals & Constructors

//// Singleton  - Only By Constructors
//Objects.create
//const myObj = new Object()


/// Object Literals   -  key:value
const mySym = Symbol("key1")

const myObj = {
    name: "Chaitanya",
    age : 27,
    email : "chaitanyaajabe@gmail.com",
    degree : ["12","BE"],
    [mySym] : "Mykey1"
}

//// Ways of Acceesing Obj

// console.log(myObj.name)
// console.log(myObj["name"])
// console.log(myObj[mySym]);
// console.log(typeof myObj[mySym])

/// freezing further changes
//Object.freeze(myObj)

/// now trying to change  name : It wont reflect
myObj.name ="Rohan"
//console.log(myObj);

/// Function As Obj Key
myObj.greeting = function(){
    console.log("Its Function");
    
}


/// Function as key with referance variable : "this"
myObj.greetingTwo = function(){
    console.log(`Here is User Name ${this.name}`);
    
}
console.log(myObj.greeting());
console.log(myObj.greetingTwo());



