const myData = {
    name: "Asif Abir",
    city: "Dhaka",
    gender: "Male",
    country: "Banbgladesh",
    isMArried: true,
    children: 3
}

myData.myWight = 70

console.log(myData["city"]);

console.log(typeof myData)
console.log(myData);

const strData = JSON.stringify(myData)

console.log(typeof strData)
console.log(strData);

const conData = JSON.parse(strData)

console.log(typeof conData)
console.log(conData);