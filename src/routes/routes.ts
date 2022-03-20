import express from "express"
import{Request } from "express"
import {Response} from "express"
import ImResF from '../ResImF'
const fs=require("fs");
const routes=express.Router();

// To Resize images and save it in folder Thumbnail
routes.get(`/Thumbnail/imagename/:imagename/width/:width/height/:height`,async(req:Request,res:Response)=>{
    // print url of resized image 
    console.log(req.url);
    // Check the validation of width and height values for resizing images 
    if((isNaN(Number(req.params.width))||isNaN(Number(req.params.width)))||Number(req.params.width)<=0||Number(req.params.height)<=0){
      console.log('Invalid values for width and height')
      res.send('Invalid values for width and height')
    }
     else{
    // check if images exists on OrSImage folder or not 
    await fs.access(`OrSImage/${req.params.imagename}`, (Imnotexist) => {
      if (!Imnotexist) {
        // print that Image  exists on console
        console.log('Image exists');
        // Check if resized image is existed before 
        fs.access(`Thumbnail/${req.params.width}-${req.params.height}-${req.params.imagename}`, (Notexist) => {
          //If image not resized  Then apply resizing function " ImResF "
          if (Notexist) {
            
            {
              console.log('Image is being resized');
           ImResF(`OrSImage/${req.params.imagename}`,Number(req.params.width),Number(req.params.height),`Thumbnail/${req.params.width}-${req.params.height}-${req.params.imagename}`); 
            res.send('Image is being resized please reload this url to access the resized image');
            return;
          }
        
          }{
            // Show the image after being resizing
          console.log('Image was resized with that value before ');
          fs.readFile(`Thumbnail/${req.params.width}-${req.params.height}-${req.params.imagename}`, function(err, Im) {
            if (err) {
              res.status(404);
            };
              // Display the image at the browser
              res.end(Im); 
          
          }); 
              }
        });
        return;
      }{
        // Print Image doesnot exist on console
      console.log('Image does not exist');
      // Display Image not be existed at browser
      res.send('Image doesnot exist on original image folder');
      }
    });
  }
  });
  export default routes;