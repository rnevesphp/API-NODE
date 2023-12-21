'use strict' 

/**
 * importamos os modulos para criação do servidor, 
 * obs.: todos os módulos importados que não possuem rotas 
 * são extraídos diretamente da pasta node_modules.
 */
const app = require('../src/app');
const http = require('http'); 
const debug = require('debug')('nodeAPI:server');

/**
 * Criamos e indicamos uma porta para normalizar 
 * no nosso servidor. 
 * app -> é a arquitetura web 
 * port -> chma a função 
 * app.set -> usando algumas instruções do express configuramos a 
 * porta do servidor usando o 'set'. 
 */
const port = normalizePort(process.env.PORT || '3000'); 

/**
 * Já com a API instanciada damos passo para criar o servidor 
 * server -> usamos o modulo http para criar um servidor e usando também a app
 * que veio do Express usando o modelo MVC. 
 * router -> server para proporcionar rotas ao usuário para acessar nossa aplicação.
 */
const server = http.createServer(app);

/**
 * normalizar a porta do servidor ou seja fazer ele escutar constantemente 
 * uma porta. 
 * e um console.log para ver o funcionamento correto. 
 */
 server.listen(port); 
 server.on('error', onError)
 server.on('Listening ', onListening); 
 console.log(`API RODANDO NA PORTA ${port}`); 

/**
 * função usada para normalizar a porta do servidor 
 */
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