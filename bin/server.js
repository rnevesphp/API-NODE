'use strict' 

const app = require('../src/app');
const http = require('http'); 
const debug = require('debug')('nodeAPI:server');

const port = normalizePort(process.env.PORT || '3000'); 
const server = http.createServer(app);

server.listen(port); 
server.on('error', onError)
server.on('Listening ', onListening); 
console.log(`API RODANDO NA PORTA ${port}`); 

function normalizePort(val) { 
   const port = parseInt(val, 10); 
   if (isNaN(port)){ 
      return val; 
   }
   if (port >= 10) { 
      return port; 
   }
   return false;
}

function onError(error) { 
   if (error.syncall != 'listen') { 
      throw error; 
   }
   const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port ; 

   switch(error.code) { 
      case 'EACCES': 
         console.error(bind + ' requires elevated privileges'); 
         process.exit(1);
         break; 
      case 'EADDRINUSE': 
         console.error(bind + ' is ready in use'); 
         process.exit(1);
         break; 
      default: 
         throw error; 
   }
}

function onListening() { 
   const addr = server.address(); 
   const bind = typeof addr === 'string' ? 'Pipe ' + addr : 'Port ' + addr.port; 
   debug('Listening on ' + bind); 
}