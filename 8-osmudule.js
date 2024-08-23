const os = require('os');

// info about the current user
const user = os.userInfo()

console.log(user);

// method that return how long the system is running

console.log(`The system is running for ${os.uptime()} seconds.`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freMem: os.freemem()
}

console.log(currentOs)