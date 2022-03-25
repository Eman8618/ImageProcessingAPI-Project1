import express, { Router } from 'express'
import { Request } from 'express'
import { Response } from 'express'
import Availabity from '../Availabilty'
const fs = require('fs')
const routes1: Router = express.Router()

routes1.get(
   `/Thumbnail/imagename/:imagename/width/:width/height/:height`,
   async (req: Request, res: Response): Promise<void> => {
      await fs.access(
         `Thumbnail/${req.params.width}-${req.params.height}-${req.params.imagename}`,
         async (err: boolean) => {
            if (err) {
               await Availabity(
                  `OrSImage/${req.params.imagename}`,
                  Number(req.params.width),
                  Number(req.params.height),
                  req,
                  res
               )
            }

            {
               // Display the image at the browser
               fs.readFile(
                  `Thumbnail/${req.params.width}-${req.params.height}-${req.params.imagename}`,
                  function (_err: boolean, Im: string) {
                     if (Im) res.end(Im)
                     return
                  }
               )
            }
         }
      )
   }
)
export default routes1
