const handelUserInput = function (key, conn) {
  if (key === "\u0003") {
    process.exit();
  }
  if (key == "\u001B\u005B\u0041") {
    conn.write("Move: up");
  }
  if (key == "\u001B\u005B\u0043") {
    conn.write("Move: right");
  }
  if (key == "\u001B\u005B\u0042") {
    conn.write("Move: down");
  }
  if (key == "\u001B\u005B\u0044") {
    conn.write("Move: left");
  }

  if (key == "\u0003") {
    process.exit();
  } // ctrl-c
};

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.on('data', (key)=> handelUserInput(key, conn));
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
};


module.exports = setupInput;