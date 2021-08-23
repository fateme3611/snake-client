  const handelUserInput = function (key, conn) {
  if (key === "\u0003") {
    process.exit();
  }
  if (key == "\u001B\u005B\u0041" || key === "w") {
    conn.write("Move: up");
  }
  if (key == "\u001B\u005B\u0043" || key === "d" ) {
    conn.write("Move: right");
  }
  if (key == "\u001B\u005B\u0042"|| key === "s") {
    conn.write("Move: down");
  }
  if (key == "\u001B\u005B\u0044" || key === "a") {
    conn.write("Move: left");
  }

  if (key == "\u0003") {
    process.exit();
  } // ctrl-c
  if (key === "1"){
      conn.write("Say: HelloSnakes");
  }
};

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.on('data', (key)=> handelUserInput(key, conn));
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
};


module.exports = setupInput;
