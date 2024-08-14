/*

Write a function called getKeys that takes an object and returns the keys within an array.

Optional Challenge - Can you solve this using a one liner?

*/




const obj = {
    instructor: "Anthony",
    cohort: "07-15-pt",
    students: 60
}

let getKeys = (obj) =>{
    let keyList = []
    for(let key in obj){
        keyList.push(obj[key])
    }
}

console.log(getKeys(obj)); // ["instructor", "cohort", "students"]
