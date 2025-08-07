///// SCOPES : Block scopes and Global Scope
///// LET,CONST : {Follows Block Scope}              VAR : {DONT Follow Block Scope}

// if(true){
//     let a =10
//     var b =20
//     const c=30
// }
// //console.table([a,b,c]);
// console.log(b);


///// Scope Example1
// function global(){
//     const userName = "Chaitanya"
//     function blockOrLocal(){
//         const ID = 10
//         console.log(userName);
        
//     }
//    // console.log(Id);
//     blockOrLocal()
    
// }
// global()

///// Scope Example1
// if (true) {
//     const user = "Chaitanya"
//     if (user === "Chaitanya") {
//         const Designation = "SA"
//         console.log(`${user} have ${Designation} Designation`);
        
//     }
//     //console.log(Designation);    
// }
// //console.log(user);


////// Expression 
// const addTwo = function(num){
//     return num + 2
// }
// console.log(addTwo(5))

////// Hoisting  : Hoisting is a JavaScript mechanism where variable and function declarations are 
// conceptually moved to the top of their containing scope during the compilation phase, 
// before the code is executed.

//// Not Allowed For Expression , Allowed For Normal Function
// console.log(addTwo(5))
// const addTwo = function(num){
//     return num + 2
// }
