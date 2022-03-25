import { Request } from 'express'
import { Response } from 'express'
const fs = require('fs')
import ImResF from './ResImF'

// Using async function to resize image with new width and new height

async function Availabity(
   OrImPth: string, //OriginalPath
   width: number, //New width for the Resized Image
   height: number, //New height for the Resized Image
   req: Request,
   res: Response
): Promise<void> {
   try {
      //Check the availability
      await fs.access(`${OrImPth}`, async (Imnotexist: boolean) => {
         // Check the image exists on the original folder
         if (Imnotexist) {
            res.send(
               'The Image doesnot be found on the OrImage folder check name of it '
            )
         } else {
            // check the validation value for new width and new height
            if (
               Number(width) <= 0 ||
               Number(width) == null ||
               Number(height) <= 0 ||
               Number(height) == null
            ) {
               res.send(
                  'The Image Cannot Be Resized Because Width And Height Should Be Valid Number > 0 '
               )
            } else if (isNaN(height) || isNaN(width)) {
               res.send(
                  'Invalid Input Because Width And Height Should Be Valid Number > 0 '
               )
            } else {
               await ImResF(
                  `OrSImage/${req.params.imagename}`,
                  Number(req.params.width),
                  Number(req.params.height),
                  `Thumbnail/${req.params.width}-${req.params.height}-${req.params.imagename}`
               )
               {
                  // Display the image at the browser
                  fs.readFile(
                     `Thumbnail/${req.params.width}-${req.params.height}-${req.params.imagename}`,
                     function (_err: boolean, Im: string) {
                        if (Im) res.end(Im)
                        return 'Resized Image is shown'
                     }
                  )
               }
            }
         }
      })
   } catch (err) {
      throw new Error(
         'Image cannot be resized you need to check Image existance on the original folder & the values of width and height '
      )
   }
}
export default Availabity
