// CommomJS, every file is module by default
// Module - encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternativeExports")
require("./7-functionExecute")

sayHi('susan')
sayHi(names.john)
sayHi(names.yago)

// console.log(names)
console.log(`${data.singlePerson.name} foi no zézin e comprou${data.items.map((item) => (" " + item))}.`)
