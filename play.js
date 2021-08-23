const connect = require("./client");
const setupInput  = require("./input")

const arguments = process.argv.slice(2);

console.log("Connecting ...");

const ip = arguments[0];
const port = arguments[1];
const playerName = arguments[2] || 'N/A';

connect(ip, port, playerName, (conn)=>{
  setupInput(conn);
});  

