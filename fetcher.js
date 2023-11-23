/*
There are two operations in this problem which will take an unknown amount of time:

You need to make an http request and wait for the response.
After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.
When you're trying to control the order of asynchronous operations, you can use nested callbacks.
*/

// required modules
const request = require('request');
const fs = require('fs');

const writeToFile =  function (url,fileUrl) {
  request(`${url}`, (error, response, body) => {
    //console.log('error:', error);       // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body);        // Print the HTML for the Google homepage.
    // console.log('received body data');

    fs.writeFile(fileUrl, body, err => {
      const bytes = body.length;
      console.log(`Downloaded and saved ${bytes} bytes to ./index.html.`);

      if (err) { console.error(err); }
    // file written successfully
    });
  });
}

// where code will start to read and execute
const args = process.argv.slice(2);
const  url = args[0];
const  fileUrl= args[1];
writeToFile(url,fileUrl);

