var cityList = ["Dhaka", "Khulna", "Rajshahi", "Bogura"]
console.log(cityList[1])
cityList.push("Rongpur", "Dinajpur")
console.log(cityList)
cityList.pop()
console.log(cityList)
cityList.unshift("Kuakata", "Khulna")
console.log(cityList)
cityList.shift()
console.log(cityList)
const newCities = cityList.slice(1, 5)
console.log(newCities)
cityList.splice(3, 2, "Gazipur")
console.log(cityList);
console.log(cityList.length);

for (var i = 0; i < cityList.length; i++) {
    console.log(cityList[i]);
}

cityList.forEach(function (data) {
    console.log(data);
})

cityList.map(function (data) {
    console.log(data);
})

for(var city of cityList) {
    console.log(city);
}

var boroShohor = cityList.filter(function (city) {
    return city.length > 6
})

console.log(boroShohor);

var ages = [65, 72, 85, 96, 70, 68, 55, 5, 6];
ages.sort(function (a, b) {
    return a - b
})
console.log(ages);

cityList.sort().reverse()
console.log(cityList);
