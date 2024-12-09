import express, { response } from "express" ;
import { createServer } from "http";

const server = express();

const port = process.env.PORT || 8989;

server.listen(port, ()=>{
    console.log(`the server is running on port http://localhost:${port}`);
})

server.get( '/',(reqest , response)=>{
    response.send("<h1>hello this is my first app</h1>");
})

server.get( '/login',(reqest , response)=>{
    response.send("<h1>hello this is my login page</h1>");
})