// Problem: we need a simple way to look at users badge count and javascript points
// Solution: use Node.js to connect to api and get info

// including a module
var profile = require("./profile")
, users = process.argv.slice(2);

// console.dir(process.argv[process.argv.length-1]);
// console.dir(process.argv.slice(2));
// users.forEach(function(username){
//   profile.get(username);
// });

users.forEach(profile.get)
