const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function (name, callback) {
  const conn = net.createConnection({
    host:IP,// IP address here,
    port:PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (d) => {
    console.log("data recieved => " + d);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: " + name);
    callback(conn);
  });
};

module.exports = connect;