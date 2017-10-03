// server.js
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

const path = require('path');
// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

/*
https://medium.com/@ryanchenkie_40935/angular-cli-deployment-host-your-angular-2-app-on-heroku-3f266f13f352
This very tiny express app can now serve our Angular 2 app once it gets to Heroku. 
Keep in mind that the start script is the last one to be called in the deployment process. 
Thepostinstall script will run beforehand, so we'll have all the files built 
and ready to go in the dist directory.
*/