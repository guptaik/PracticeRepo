const os = require('os');

//infor about cuurent user

const user = os.userInfo()
console.log(user);


//methods returns system uptime in seconds
console.log(`the System uptime is ${(os.uptime())} seconds`)

const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()

}

console.log(currentOS)