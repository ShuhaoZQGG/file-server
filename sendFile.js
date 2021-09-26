const fs = require('fs');
const { setServer } = require('./server');
const {name} = require('./constant');

const sendFile = function(server) {
  server.on('connection', (client) => {
    console.log('New client connected!');
    console.log('Hello there! Please enter the file name that you want to retrieve:');

    client.setEncoding('utf8'); // interpret data as text
    
    client.on('data', (data) => {
      console.log('Message from client: ', data)
      let file = `./${data}`;
      console.log(`the client is looking for ${data}`)
      fs.access(file, fs.F_OK, (err) => {
        console.log(`${file} exists or not?`)
        if (err) console.log(`${file} does not exist`);
        else console.log(`${file} exists`);
      });
    

    });
    
  });
}

sendFile(setServer());