const express = require('express'); 
// const http = require('http'); 
const path = require('path'); 

const app = express(); 
let server = require('http').Server(app);

app.use(express.static(__dirname, '/dist')); 

var port = process.env.PORT || 8000

// app.listen(process.env.PORT || 8080); 
server.listen(port, function() {
    console.log("App is running on port " + port);
});
// const port = process.env.PORT ||'3001'; 
// app.set('port', port);

// PathLocationStrategy 
// angular to handle routing not server
app.get('*', (req, res)=> {
    res.sendfile(path.join(__dirname, '/index.html')); 
});

console.log('console listening');
// const server = http.createServer(app); 
// server.listen(port, ()=> console.log('Running')); 
