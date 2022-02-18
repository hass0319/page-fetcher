// Install and use the request library to make the HTTP request (We know this library is deprecated but it is still ok to use for our purposes.)
// Use Node's fs (file system) module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning above)


const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

const pageFetch = (args ) => {
  let url = args[0];
  let path = args[1];
  request(url, (error, response, body) => {// body/content
    console.log('error =>', error);// Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body);
    
    fs.writeFile(path, body, err => {
      if (err) {
        console.log('err =>', err);
        return;
      }
      console.log(`downloaded and save to ${path}`);
    });
  });
};

pageFetch(args);