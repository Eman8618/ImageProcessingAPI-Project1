import supertest from 'supertest'
import Availabity from '../Availabilty'
const fs = require('fs')
import routes1 from '../routes/routes1'
import { Request } from 'express'
import { Response } from 'express'

//Test 1 for the resizing function when image exists on original folder but not be resized
//with that acceptable width and height
// Describe the test
describe('Test #1::Testing Of The availability of existance of Image and values of height and width then Resizing an Image', () => {
   it('Getting Resizing Image If all parameters of it are available', async () => {
      //Using ImResF for resizing the image
      const width = 111
      const height = 400
      const imagename = 'palmtunnel.jpg'

      // Check if resized image is existed before

      routes1.get(
         `/Thumbnail/imagename/:imagename/width/:width/height/:height`,
         async (req: Request, res: Response) => {
            await fs.access(
               `Thumbnail/${req.params.width}-${req.params.height}-${req.params.imagename}`,
               async (err: boolean) => {
                  //If image not resized  Then apply resizing function " ImResF "
                  await Availabity(
                     `OrSImage/${imagename}`,
                     width,
                     height,
                     req,
                     res
                  )
                  expect(
                     fs.access(
                        `Thumbnail/${width}-${height}-${imagename}`,
                        (Notexist: boolean) => {
                           if (Notexist) {
                              ;('Image Resized Successfully')
                           }
                        }
                     )
                  )
               }
            )
         }
      )
   })
})
//Test 2 for the resizing function when image doesnot exist on original folder
//with that acceptable width and height
// Describe the test
describe('Test #2::Testing Of The availability of existance of Image and values of height and width then Resizing an Image', () => {
   it('Unable To Getting Resizing Image when Image isnot  exist on the OrSImage folder', async () => {
      //Using ImResF for resizing the image
      const width = 103
      const height = 400
      const imagename = 'palmtnnel.jpg'

      routes1.get(
         `/Thumbnail/imagename/:imagename/width/:width/height/:height`,
         async (req: Request, res: Response) => {
            await fs.access(
               `Thumbnail/${req.params.width}-${req.params.height}-${req.params.imagename}`,
               async (err: boolean) => {
                  //If image not resized  Then apply resizing function " ImResF "
                  await Availabity(
                     `OrSImage/${imagename}`,
                     width,
                     height,
                     req,
                     res
                  )
                  expect(
                     fs.access(
                        `Thumbnail/${width}-${height}-${imagename}`,
                        (exist: boolean) => {
                           if (exist) {
                              ;('Image Resized Successfully')
                           } else {
                              expect('Image doesnot exist')
                           }
                        }
                     )
                  )
               }
            )
         }
      )
   })
})
//Test 3 for the resizing function when image exist on original folder
//but one or both of  width and height arenot acceptable
// Describe the test
describe('Test #3::Testing Of The availability of existance of Image and values of height and width then Resizing an Image', () => {
   it('Unable To Getting Resizing Image when Image is exist on the OrSImage folder but one or both of  width and height arenot acceptable', async () => {
      //Using ImResF for resizing the image
      const width = 103
      const height = 0
      const imagename = 'palmtunnel.jpg'

      routes1.get(
         `/Thumbnail/imagename/:imagename/width/:width/height/:height`,
         async (req: Request, res: Response) => {
            await fs.access(
               `Thumbnail/${req.params.width}-${req.params.height}-${req.params.imagename}`,
               async (err: boolean) => {
                  //If image not resized  Then apply resizing function " ImResF "
                  await Availabity(
                     `OrSImage/${imagename}`,
                     width,
                     height,
                     req,
                     res
                  )
                  expect(
                     fs.access(
                        `Thumbnail/${width}-${height}-${imagename}`,
                        (exist: boolean) => {
                           if (exist) {
                              ;('Image Resized Successfully')
                           } else {
                              expect(
                                 'Both Width & Height should be valid number>0'
                              )
                           }
                        }
                     )
                  )
               }
            )
         }
      )
   })
})
