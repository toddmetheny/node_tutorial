var https = require("https")
, http = require("http")
, prot = 'https://';

// print out message
function printMessage(username, badgeCount, points){
  var message = username + " has " + badgeCount + " total badge(s) " + points + " points in javascript";
  console.log(message);
}

// print out error messages
function printError(error){
  console.error(error.message);
}

function get(username){
  // connect to the api url (http://teamtreehouse.com/username.json)
  var request = https.get(prot + "teamtreehouse.com/" + username + ".json", function(response){
    var body = ""
    // read the data
    console.log(response.statusCode);
    response.on('data', function(chunk){
      body += chunk;
    });

    response.on('end', function(){
      if(response.statusCode === 200){
        try {
          // parse the data
          var profile = JSON.parse(body);
          // print the data      
          printMessage(username, profile.badges.length, profile.points.JavaScript);
        } catch(error){
          // parse error
          printError(error);
        }
      } else {
        // status code error
        printError({message: "Error getting profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
      }
    });
  })
  // connection error
  request.on("error", printError);
}

module.exports.get = get;











