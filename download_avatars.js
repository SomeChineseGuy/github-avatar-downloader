var GITHUB_USER = "SomeChineseGuy";
var GITHUB_TOKEN = "0ed5ec94f7c3e10ddd85e154ee15b5db167c597e";

console.log('Welcome to the GitHub Avatar Downloader!');

var request = require('request');



var fs = require('fs');

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
    url: requestURL,
    headers: {
      'User-Agent': 'request'
    }
  };
  var space = "";
  request.get(options)
  .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
        response.setEncoding('utf8');
        console.log('Response Status Code: ', response.statusCode);
        response.on('data', (data) => {
          space = data + space;
         });
         response.on('end', function() {
          console.log(space);
        });
        })

}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

