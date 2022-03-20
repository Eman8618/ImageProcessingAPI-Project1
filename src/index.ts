import express from 'express';
import { Request } from 'express';
import { Response } from 'express';
import routes from './routes/routes';


const app = express();
//const fs =require("fs");
const port='3000';
//To Access the images with their origial size
app.use('/OrSImage',express.static('OrSImage'));
app.get('/',(req:Request,res:Response)=>{
  //Print url on console
  console.log(req.url);
  res.send(`Server is started working on port ${port}`)
    
});

// Resizing Image from the middleware route.ts
app.use('/', routes);

// Server is starting on port 3000
app.listen(port,()=>{console.log((`Server is listening on port number ${port}: http://localhost:${port}`))});
export default app;