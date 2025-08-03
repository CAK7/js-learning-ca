const myObj = new Object()

myObj.age =27
myObj.name ="Chaitanya"
myObj.innerObj ={
    gmail : "abc@gmail.com"
}

//console.log(myObj);
//console.log(myObj.innerObj.gmail);

//-----------------------------

const obj1 ={"1":"a","2":"b"}
const obj2 ={"3":"a","4":"b"}
const obj3 ={"5":"a","6":"b"}

const obj4 = {obj1,obj2,obj3}

console.log(obj4);

//// If we want to combine all key:value in single obj

const obj5 = Object.assign({},obj1,obj2,obj3)
console.log(obj5);

//// Combine By Spread Concept

const obj6 = {...obj1,...obj2,...obj3}
console.log(obj6);
////---------------- Array Of OBj from Data Base --///

const ls = [
    {
        id:25
    },
    {
        name:"rohan"
    },
    {
        age:27
    }
]

console.log(ls[1].name)
/// --------------Creating key, value, entry Array From Obj ///
console.log(Object.keys(myObj));
console.log(Object.values(myObj));
console.log(Object.entries(myObj));


