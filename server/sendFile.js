const fs = require('fs');
const { setServer } = require('./server');
const {name} = require('./constant');

const sendFile = function(server) {
  server.on('connection', (client) => {
    console.log(`${name} connected!`);
    
    client.setEncoding('utf8'); // interpret data as text
    
    client.on('data', (data) => {
      console.log('Message from client: ', data)
      let file = data;
      console.log(`the client is looking for ${data}`)
      fs.access(file, fs.F_OK, (err) => {
        if (err) {
          client.write(`${file} does not exist`);
        } else {
          fs.copyFile(file, `../client/${file}`, err => {
            if (err) console.log('Cannot find destination!')
          })
          client.write(`${file} exists and is copied to client side`);
        }
      });
      

    });
    
  });
}

sendFile(setServer());