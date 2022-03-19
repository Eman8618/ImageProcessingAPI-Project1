
const sharp = require("sharp");
const fs=require("fs");
// Using async function to resize image with new width and new height

async function ImResF(OrImPth: string//Original Image with it's Path
,width: number//New width for the Resized Image
,height: number,//New height for the Resized Image 
 ReImPth: string// Resized Image and it's Path
 ){
  try {
    //Using sharp to resize the image 
    await sharp(OrImPth) 
      .resize({
        width,
        height
      })
      .toFormat("jpeg", { mozjpeg: true })
      .toFile(ReImPth);
  
  } catch (err) {
    console.log('Image Cannot be resized');
    return 'Image cannot be resized'
  }
}
export default ImResF;




