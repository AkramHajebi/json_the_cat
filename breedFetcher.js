const request = require('request');


let myArgs = process.argv.slice(2);  //  process.argv is used to make simple Command-Line Interface   https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
let catName = myArgs[0];        // first argument got from sell : name
let url = `https://api.thecatapi.com/v1/breeds/search?q=${catName}`;

request(url, (err, response, body) => {
  
  if (err) throw err;

  const data = JSON.parse(body);
  //console.log(typeof data);
  console.log(data[0].description);
});