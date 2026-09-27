let omorAge = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(22)
    }, 2000)
});

const showOmorAge = async () => {
    const age = await omorAge;
    console.log(age);
}

showOmorAge()