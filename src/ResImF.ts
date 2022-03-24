const sharp = require('sharp')
const fs = require('fs')
// Using async function to resize image with new width and new height

async function ImResF(
   OrImPth: string, //Original Image with it's Path
   width: number, //New width for the Resized Image
   height: number, //New height for the Resized Image
   ReImPth: string // Resized Image and it's Path
) {
   try {
      //Using sharp to resize the image
      await sharp(OrImPth)
         .resize({
            width,
            height,
         })
         .toFormat('jpeg', { mozjpeg: true })
         .toFile(ReImPth)
      return ReImPth
   } catch (err) {
      return 'Image cannot be resized you need to check Image existance on the original folder & the values of width and height '
   }
}
export default ImResF
