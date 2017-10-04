const express = require('express'); 
// const http = require('http'); 
const path = require('path'); 

// const api = require('./server/routes/api'); 

const app = express(); 

app.use(express.static(__dirname, '/dist')); 


app.listen(process.env.PORT || 8080); 

// const port = process.env.PORT ||'3001'; 
// app.set('port', port);

// PathLocationStrategy 
// angular to handle routing not server
app.get('*', (req, res)=> {
    res.sendfile(path.join(__dirname, 'dist/index.html')); 
});

console.log('console listening');
// const server = http.createServer(app); 
// server.listen(port, ()=> console.log('Running')); 
