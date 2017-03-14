const GITHUB_USER = "SomeChineseGuy";
const GITHUB_TOKEN = "0ed5ec94f7c3e10ddd85e154ee15b5db167c597e";
var request = require('request');
var fs = require('fs')
console.log('Welcome to the GitHub Avatar Downloader!');


function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
    url: requestURL,
    headers: {
      'User-Agent': 'request'
    }
  };
    request.get(options, function (error, response, body)  {

      if(!error && response.statusCode == 200) {
        var data = JSON.parse(body);

        var result = data.map(function(value) {
          console.log(value.avatar_url);
        })

        if (error){
          console.log('Error, status:', response.statusCode)
        }

        if (response !== 200) {
          console.log ('Correct outcome. Status code is:', response.statusCode)
        }

    }
});
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});