const net = require("net");

// establishes a connection with the game server
const connect = function (name, callback) {
  const conn = net.createConnection({
    host: "135.23.223.133",// IP address here,
    port: 50542// PORT number here,
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