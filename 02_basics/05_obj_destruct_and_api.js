const course = {
    name : "JavaScript",
    fees : 999,
    courseInstructor : "Chaitanya"
}

//// ----- Object Destructuring ----///
const {courseInstructor} = course
console.log(courseInstructor);

/// Or
const {name: n} = course
console.log(n);

