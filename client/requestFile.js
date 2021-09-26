const {connect} = require('./client');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setEncoding("utf8");
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(input) {
  let str = input.toString();
  str = str.trim();
  connection.write(str)
}


setupInput(connect());

module.exports = {
  setupInput
}