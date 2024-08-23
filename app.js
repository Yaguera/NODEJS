const {readFileSync, writeFileSync} = require("fs")

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
const result = readFileSync('./content/result.txt', 'utf-8')

writeFileSync('./content/result.txt', `Aqui esta o resultado: ${first}, ${second}.`)

console.log(first, second, result);
