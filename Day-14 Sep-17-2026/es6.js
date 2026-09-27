// let, const

// var name = "John"
// var name = "Cina"
// name = "Rock"
let personName = "John"
personName = "Rock"
const city = "New York"
// city = "Los Angeles"

// Arrow function

const person2 = function () {
    return "Jane Smith"
}

const person = () => {
    return "John Doe"
}

const person3 = () => "John Doe"

const perosn4 = msg => msg
console.log(perosn4("Hello World"))

// Template literals
const n1 = 5;
const n2 = 6;
console.log(n1 + " + " + n2 + " = " + (n1+n2));
console.log(`${n1} + ${n2} = ${n1+n2}`);

// Destructuring
const students = ["Utsho", "Istiak", "Omor", "Rohomot"]
// const std1 = students[0]
// const std2 = students[1]
const [std1, std2, ...std3] = students

console.log(std3);
console.log(std1);

const stdInfo = {
    name: "Utsha",
    city: "Keraniganj",
    gender: "Male",
    bestFriends: ["Sazzad", "Omor", "Istiak32"],
    fullInfo: function () {
        return `${this.name} lives in ${this.city}, and his gender is ${this.gender}. ${this.bestFriends[0]} is his best friend`
    },
    skills: {
        html: "90%",
        css: "80%",
        js: "50%",
        chapa: function () {
            return this.html
        }
    }
}
console.log(stdInfo.name);
console.log(stdInfo.fullInfo());
console.log(stdInfo.skills.chapa());

// object Destructuring
// const nm = stdInfo.name;
// const gender = stdInfo.gender;
// const ct2 = stdInfo.city;

const {name: nm, gender, city: ct2} = stdInfo

console.log(nm, gender, ct2);

// spread/rest operator ...

const ctList = ["New Dilli", "Lahor", "Islamabad", "Kabul"]
const newCtList = [...ctList, "Dhaka", "Bhrammonbaria"]
const strCts = newCtList.join(", ")
console.log(newCtList)
console.log(strCts)
console.log(..."hello");




