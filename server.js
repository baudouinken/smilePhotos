/* //Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/smile-photos'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/smile-photos/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080); */


const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/smile-photos'));
app.listen(process.env.PORT || 8080);

//PATH LOCATION STARTEGY

app.get('/*', function(req,res){
  const fullPath = path.join(__dirname + '/dist/smile-photos');
  console.log(" Fetching from.." + fullPath);
    res.sendFile(fullPath);
})

console.log('Server started running..');

//Changed to run on Heroku