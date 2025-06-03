import { WebSocketServer } from "ws";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "@repo/backend-comman/config";



const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws,request) => {
  console.log("New client connected");

  const url = request.url;
  if(!url){
    return;
  }


  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("name");
  const decoded = jwt.verify(token as string ,process.env.JWT_SECRET as string) as { userId: string } | null;

  if(!decoded || !decoded.userId){
    ws.close();
    return;

  }



  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
    // Echo the message back to the client
    ws.send(`Server received: ${message}`);
  });

  
  
});