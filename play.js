const connect = require("./client");

console.log("Connecting ...");


const conn = connect();  

conn.on('data', (d)=>{
  console.log("data => " +  d);
});

conn.on("connect", ()=>{
  console.log("Successfully connected to game server");
  conn.write("Name: FAN");
  setInterval(() => {
    conn.write("FAN");
  }, 1000); 
});


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const std = setupInput();

std.on('data', function(key){
  if (key === '\u0003') {
    process.exit();
  }
  if (key == '\u001B\u005B\u0041') {
    conn.write("Move: up"); 
  }
  if (key == '\u001B\u005B\u0043') {
    conn.write("Move: right"); 
  }
  if (key == '\u001B\u005B\u0042') {
    conn.write("Move: down"); 
  }
  if (key == '\u001B\u005B\u0044') {
    conn.write("Move: left"); 
  }

  if (key == '\u0003') { process.exit(); }    // ctrl-c
});
