const GITHUB_USER = "SomeChineseGuy";
const GITHUB_TOKEN = "0ed5ec94f7c3e10ddd85e154ee15b5db167c597e";
var request = require('request');
var fs = require('fs')
console.log('Welcome to the GitHub Avatar Downloader!');
process.argv[2]
process.argv[3]

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL)
  var options = {
    url: requestURL,
    headers: {
      'User-Agent': 'request'
    }
  };
  request.get(options, function (error, response, body)  {

    if(!error && response.statusCode == 200) {
      var data = JSON.parse(body);

      if (error){
        console.log('Error, status:', response.statusCode);
      }

      if (response !== 200) {
        console.log ('Correct outcome. Status code is:', response.statusCode);
      }
      // console.log(name)
      cb(null, data)
    }
    // console.log(name)
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  if(!err) {
    for(one of result) {
      // console.log(one.login + "   :   " + one.avatar_url);
      const origFileName = one.login;
      const newFileName = `./${origFileName}.jpg`;
      downloadImageByURL(one.avatar_url, newFileName);
    }
  }
  // console.log(name)
});

function downloadImageByURL(url, filePath) {
  request.get(url)
  .on('error', function (err) {
    throw err;
  })
  .on('response', function (response) {
    console.log('Response Status Code: ', response.statusCode);
 })
  .pipe(fs.createWriteStream(filePath));
}


// downloadImageByURL();


