const dhaka = 20000000

try {
    if (dhaka < 10000000) {
        console.log("Dhaka is a beautiful city")
    }else{
        throw new Error("Dhaka is a crowded city")
    }
}catch (err) {
    console.log(err.message);
}finally {
    console.log("This is finally block");
}