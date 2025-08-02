//// Dates  - typeOf - Object

// Declaration
let date = new Date()

//console.log(date.toLocaleDateString())

let myCreatedDate = new Date("08-03-2025")
//console.log(myCreatedDate.toDateString())

/// Timestamp

let myTimeStamp = Date.now()
//console.log(myTimeStamp);

//console.log(myCreatedDate.getTime());

let totalMiliSecondElapsed = myCreatedDate.getTime() - myTimeStamp
//console.log(Math.floor(totalMiliSecondElapsed/1000));
 
let newDate = new Date();
console.log(newDate.getMonth()+1);

/// Customize DatE fORMATE

console.log(newDate.toLocaleDateString('default',
    {
        weekday:"short"
    }));
 