// while
var n = 0;

while(n < 10) {
    console.log("Hello World!" + n);
    n++;
}

var m = 0;
while(m <= 20) {
    console.log(m);
    // m = m + 2;
    m += 2;
}

// 0 - 100 devide by 7, remaining 6
var o = 0;
while (o <= 100) {
    if(o > 7 && o % 7 == 6) {
        console.log(o);
    }
    o++
}

//  For loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}

var g = 2;
for (var j = 1; j <= 10; j++) {
    console.log(g + " x " + j + " = " + g*j);
}