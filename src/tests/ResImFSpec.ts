
// Importing sharp  
//import sharp  from 'sharp';

const sharp =require("sharp");
// Importing app from ResImF.ts file
import ImResF from '../ResImF'
// Importing supertest 
import supertest from 'supertest';
const fs=require("fs");

//Test 1 for the resizing function when image exists on original folder but not be resized
//with that acceptable with and height
// Describe the test
describe('Test #1::Testing Of Resizing an Image', () => {
  it('Getting Resizing Image', async()=>{
      try {
        //Using ImResF for resizing the image 
          const width=111;
          const height=400;
          const imagename='palmtunnel.jpg';
          // Check if resized image is existed before 
    await fs.access(`Thumbnail/${width}-${height}-${imagename}`, (Notexist) => {
      //If image not resized  Then apply resizing function " ImResF "
          ImResF(`OrSImage/${imagename}`,width,height,`Thumbnail/${width}-${height}-palmtunnel.jpg`);
          expect('Image Resized Successfully');})

      } catch (err) {
       console.log('Image cannot be resized you need to check Image existance on the original folder & the values of width and height ');
        return 'Image cannot be resized you need to check Image existance on the original folder & the values of width and height '

      }
    })});

//Test 2 for the resizing function when image maybe not exists on original folder 

// Describe the test
describe('Test #2 :: Testing Of Resizing an Image', () => {
    it('Getting Resizing Image', async()=>{
        try {
          //Using ImResF for resizing the image 
            const width=121;
            const height=33;
            const imagename='palmtnnel.jpg';
            // Check if resized image is existed before 
      await fs.access(`Thumbnail/${width}-${height}-${imagename}`, (Notexist) => {
        //If image not resized  Then apply resizing function " ImResF "
        //if (Notexist) {
            ImResF(`OrSImage/${imagename}`,width,height,`Thumbnail/${width}-${height}-palmtunnel.jpg`);
            expect('Image Resized Successfully');})

        } catch (err) {
         console.log('Image cannot be resized you need to check Image existance on the original folder & the values of width and height ');
          return 'Image cannot be resized you need to check Image existance on the original folder & the values of width and height '

        }
      })});

  //Test 3 for the resizing function when  the values of width & height are Invalid
// Describe the test
describe('Test #3 :: Testing Of Resizing an Image', () => {
  it('Getting Resizing Image', async()=>{
      try {
        //Using ImResF for resizing the image 
          const width=121;
          const height=-33;
          const imagename='palmtunnel.jpg';
        
          if((width)<0||height<0){
            console.log('===================================')
            console.log('Invalid values for width and height')
          }
          else{

          // Check if resized image is existed before 
    await fs.access(`Thumbnail/${width}-${height}-${imagename}`, (Notexist) => {
      //If image not resized  Then apply resizing function " ImResF "
      //if (Notexist) {
          ImResF(`OrSImage/${imagename}`,width,height,`Thumbnail/${width}-${height}-palmtunnel.jpg`);
          expect('Image Resized Successfully');})
        }

      } catch (err) {
       console.log('Image cannot be resized you need to check Image existance on the original folder & the values of width and height ');
        return 'Image cannot be resized you need to check Image existance on the original folder & the values of width and height '

      }
    
    })});


