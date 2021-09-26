const net = require('net');
const {host, port, name} = require('../server/constant');

const connect = function() {
  const conn = net.createConnection({ 
    host: host, // change to IP address of computer or ngrok host if tunneling
    port: port // or change to the ngrok port if tunneling
  });

  conn.setEncoding('utf8'); // interpret data as text
  
  console.log(`${name} connected!`)
  console.log('Hello there! Please enter the file name that you want to retrieve:');


  conn.on('data', (data) => {
    console.log('server says:', data);
  });

  return conn;
}

module.exports = {
  connect
}