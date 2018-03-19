const { execSync } = require('child_process')
const os = require('os')

const print = (str) => console.log(`${str}\n`)
const printInfo = (str) => print(`   ... ${str}`)
const execAndPrint = (command) => print(execSync(command))

execAndPrint(`move "build\\*.*" ".\\..\\static"`)