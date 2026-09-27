// Conditional Statements
if (5 > 6) {
    console.log("Hello World!");
} else if (6 > 7) {
    console.log("Hello Dhaka!");
}else if ( 7 < 8) {
    console.log("Assalamuoyalaikum!");
}else {
    console.log("Hello Universe!");
}

// Bangladesh (female = 18) (male = 21)
var gender = "female";
var age = 19;
if (gender === "male") {
    if(age >= 21) {
        console.log("He is eligible for marriage");
    }else {
        console.log("He is not eligible for marriage");
    }
}else if (gender === "female") {
    if(age >= 18) {
        console.log("She is eligible for marriage");
    }else {
        console.log("She is not eligible for marriage");
    }
}

// Switch
var day = new Date().toLocaleString("en-US", { weekday: "long" });

switch (day) {
    case "Saturday":
        console.log("Today is Saturday");
        break;
    
    case "Sunday":
        console.log("Today is Sunday");
        break;
    
    case "Monday":
        console.log("Today is Monday");
        break;
    
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    
    case "Thursday":
        console.log("Today is Thursday");
        break;
    
    case "Friday":
        console.log("Today is Friday");
        break;

    default:
        console.log("Invalid day");
}