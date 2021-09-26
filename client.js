const net = require('net');
const {host, port, name} = require('./constant');

const connect = function() {
  const conn = net.createConnection({ 
    host: host, // change to IP address of computer or ngrok host if tunneling
    port: port // or change to the ngrok port if tunneling
  });

  conn.setEncoding('utf8'); // interpret data as text

  const myName = name;

  conn.on('connect', () => {
    conn.write(`Hello from client ${myName}!`);
  });


  conn.on('data', (data) => {
    console.log("DATA CAME IN!!!!!");
    console.log(data);
  })

  return conn;
}

module.exports = {
  connect
}