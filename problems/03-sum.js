/*


Make a function called valSum that will take in an object as an argument and return the sum of all the values.

Try to solve this without using using Object.keys/Object.values/Object.entries


*/
const valSum = obj =>{
    let sum = 0
    for(let key in obj){
        sum += obj[key]
        console.log(studentCount.key[obj[key]])
    }
    return sum
}


const studentCount = {
    january: 10,
    february: 20,
    march: 30,
    april: 30,
    may: 20,
    june: 60,
    july: 60


};

console.log(valSum(studentCount)); // 230
