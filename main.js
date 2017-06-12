var slack_auth, asana_auth;

var get_auth = new Promise( function (resolve, reject) {
  $.getJSON("credentials.json", function(obj) {
    var auth_tokens = obj;
    console.log("in promise")
    resolve(auth_tokens)
  })
})

get_auth.then(function(val) {
  slack_auth = val.slack;
  asana_auth = val.asana;
})
.catch(function(reason) {
  console.log(reason)
})

$(document).ready(function() {
  if(slack_auth != undefined) {
    console.log(slack_auth)
  }
  else {
    console.log("Unable to retrieve credentials");
  }
  if(asana_auth != undefined) {
    console.log(asana_auth)
  }
  else {
    console.log("Unable to retrieve credentials");
  }
})
