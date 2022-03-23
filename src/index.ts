import express from 'express';
import { Request } from 'express';
import { Response } from 'express';
import routes1 from './routes/routes1';


const app = express();
//const fs =require("fs");
const port='3000';
//To Access the images with their origial size
app.use('/OrSImage',express.static('OrSImage'));
app.get('/',(req:Request,res:Response)=>{
  
  res.send(`Server is started working on port ${port}`)
    
});

// Resizing Image from the middleware route.ts
app.use('/', routes1);

// Server is starting on port 3000
app.listen(port,()=>{console.log((`Server is listening on port number ${port}: http://localhost:${port}`))});
export default app;