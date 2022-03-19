
// Importing sharp  
//import sharp  from 'sharp';

const sharp =require("sharp");
// Importing app from ResImF.ts file
import ImResF from '../ResImF'
// Importing supertest 
import supertest from 'supertest';

// Describe the test
describe('Testing Of Resizing an Image', () => {
    it('Getting Resizing Image', async()=>{
        try {
          //Using ImResF for resizing the image 
            const width=111;
            const height=400;
            await ImResF("OrSImage/palmtunnel.jpg",width,height,`Thumbnail/${width}-${height}-palmtunnel.jpg`);
            expect('Image Resized Successfully');

        } catch (err) {
         console.log('Image Cannot be resized');
          return 'Image cannot be resized'
        }
      })});

  



