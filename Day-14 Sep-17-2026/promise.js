const success = true

const omor = new Promise((res, rej) => {
    if(success) {
        setTimeout(() => {
            res("Omor kotha rekheche")
        }, 2000)
    }else {
        rej("Omor kotha rakheni")
    }
})

omor.then(r => {
    console.log(r);
}).catch(err => {
    console.log(err);
})