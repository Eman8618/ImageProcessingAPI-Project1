

const sharp =require("sharp");
// Importing app from ResImF.ts file
import ImResF from '../ResImF'
// Importing supertest 
const fs=require("fs");

//Test 6 for the resizing function when image exists on original folder but not be resized
//with that acceptable width and height
// Describe the test
describe('Test #6::Testing Of Resizing an Image with ResImF ', () => {
  it('Getting Resizing Image', async()=>{
      try {
        //Using ImResF for resizing the image 
          const width=111;
          const height=400;
          const imagename='palmtunnel.jpg';
          // Check if resized image is existed before 
    
      //If image not resized  Then apply resizing function " ImResF "
      await ImResF(`OrSImage/${imagename}`,width,height,`Thumbnail/${width}-${height}-${imagename}`);
          expect( fs.access(`Thumbnail/${width}-${height}-${imagename}`, (Notexist:boolean) => { if(Notexist){
            'Image Resized Successfully'}}))

      } catch (err) {
        return 'Image cannot be resized you need to check Image existance on the original folder & the values of width and height '

      }
    })});




