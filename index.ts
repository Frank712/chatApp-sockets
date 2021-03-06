import Server from "./classes/server";
import { router } from "./routes/router";
import bodyparser from 'body-parser';
import cors from 'cors';

const server = Server.instance;

//  body-parser
server.app.use( bodyparser.urlencoded({extended: true}) );
server.app.use( bodyparser.json() );
server.app.use( cors( {origin: true, credentials: true} ) );
//  Services Routes
server.app.use('/', router);

server.start( () =>{
   console.log(`Server running in PORT ${ server.port }`);
});