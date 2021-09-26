const {connect} = require('./client');
const {name} = require('./constant');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setEncoding("utf8");
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(input) {
  connection.write(`${name} is asking for file ${input}`)
}


setupInput(connect());