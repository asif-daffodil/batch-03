function myFunc (m1, m2) {
    return m1 + " " + m2
}

console.log(myFunc("Hello", "World!"));
console.log(myFunc("Hello", "Universe!"));

function sum (n1, n2) {
    if(!+n1 || !+n2) {
        return "Invalid number"
    }
    return +n1 + +n2
}

console.log(sum(5, 3));

// Functional expression
var jadu = function (msg) {
    return msg;
}

console.log(jadu("Jaduu jaduu"));

// Call back function

var captin = function (name) {
    return "Our captin's name is : " + name()
}

var neta = function () {
    return "Utsho"
}

console.log(captin(neta));

// recursive function
var toZero = 
