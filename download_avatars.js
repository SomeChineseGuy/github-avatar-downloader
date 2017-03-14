const GITHUB_USER = "SomeChineseGuy";
const GITHUB_TOKEN = "0ed5ec94f7c3e10ddd85e154ee15b5db167c597e";
var request = require('request');
var fs = require('fs')
console.log('Welcome to the GitHub Avatar Downloader!');


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

      // const avatar_urls = data.map(res => res.avatar_url);
      // const names = data.map(res1 => res1.login);

      // // console.log(avatar_urls.length);
      // // console.log(avatar_urls[0]);
      // // console.log(names.length);
      // // console.log(names[0]);

      // avatar_urls = ['http://this.that.com', 'http://the.other.sh.it', ...]
      // names = ['jeresig', 'timmywil', 'dmethvin'..];

      // results = [
      //   { url: 'blah',  name: 'jeresig'},
      //   { url: 'blah',  name: 'jeresig'},
      //   { url: 'blah',  name: 'jeresig'},
      // ]





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
    for(record of result) {
      console.log(record.login + "   :   " + record.avatar_url);
      // const origFileName = url.split('/')[4];
      // const newFileName = `./${origFileName}.jpg`;
      // downloadImageByURL(url, newFileName);
    }
  }
  // console.log(name)
});

// function downloadImageByURL(url, filePath) {
//   request.get(url)
//   .on('error', function (err) {
//     throw err;
//   })
//   .on('response', function (response) {
//     console.log('Response Status Code: ', response.statusCode);
//  })
//   .pipe(fs.createWriteStream(filePath));
// }


// downloadImageByURL();


