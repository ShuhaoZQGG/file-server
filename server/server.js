const net = require('net');

const setServer = function() {
  const server = net.createServer();

  server.listen(3000, () => {
    console.log('Server listening on port 3000!');
  });

  return server;
}

module.exports = {
  setServer
}
