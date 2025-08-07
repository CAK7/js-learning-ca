////////// This Keyword : current Object Referance
// const user = {
//     userName : "CHAITANYA",
//     userId : 10,
//     UserDeatails : function print(){
//         console.log(`UserName is ${this.userName} , having UserID : ${this.userId}`);
//         console.log(this);
        
//     }
// }
// user.UserDeatails()
// user.userName = "Rohan"
// user.UserDeatails()


///// This works differantly in browser and in Node
//console.log(this);


//////// This works in Function
// function test(){
//     console.log(this);
    
// }
// test()


//////// This Dont works in Arrow Function
//  const test = () => {
//     console.log(this);
    
//  }

//  test()

////////// Arrow Function Example 1

// const addTwo = (num1,num2) => {return num1+num2}
// console.log(addTwo(5,5));

////////// Arrow Function Example 2 : Implecite Return(Dont use Parenthesis + Return Keyword)

// const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(5,5));

//// Return Object
const returnName = (value) =>({name : value})
console.log(returnName("Chaitanya"));

