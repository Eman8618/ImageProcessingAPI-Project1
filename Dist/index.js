"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ResImF_1 = __importDefault(require("./ResImF"));
var app = (0, express_1.default)();
var fs = require("fs");
var port = '3000';
//To Access the images with their origial size
app.use('/OrSImage', express_1.default.static('OrSImage'));
app.get('/', function (req, res) {
    //Print url on console
    console.log(req.url);
    res.send("Server is started working on port ".concat(port));
});
// To Resize images and save it in folder Thumbnail
app.get("/Thumbnail/imagename/:imagename/width/:width/height/:height", function (req, res) {
    // print url of resized image 
    console.log(req.url);
    // check if images exists on OrSImage folder or not 
    fs.access("OrSImage/".concat(req.params.imagename), function (Imnotexist) {
        if (!Imnotexist) {
            // print that Image  exists on console
            console.log('Image exists');
            // Check if resized image is existed before 
            fs.access("Thumbnail/".concat(req.params.width, "-").concat(req.params.height, "-").concat(req.params.imagename), function (Notexist) {
                //If image not resized  Then apply resizing function " ImResF "
                if (Notexist) {
                    console.log('Image is being resized');
                    (0, ResImF_1.default)("OrSImage/".concat(req.params.imagename), Number(req.params.width), Number(req.params.height), "Thumbnail/".concat(req.params.width, "-").concat(req.params.height, "-").concat(req.params.imagename));
                    return;
                }
                {
                    // Show the image after being resizing
                    console.log('Image was resized with that value before ');
                    fs.readFile("Thumbnail/".concat(req.params.width, "-").concat(req.params.height, "-").concat(req.params.imagename), function (err, Im) {
                        if (err) {
                            res.status(404);
                        }
                        ;
                        // Display the image at the browser
                        res.end(Im);
                    });
                }
            });
            return;
        }
        {
            // Print Image doesnot exist on console
            console.log('Image does not exist');
            // Display Image not be existed at browser
            res.send('Image doesnot exist on original image folder');
        }
    });
});
// Server is starting on port 3000
app.listen(port, function () { console.log(("Server is listening on port number ".concat(port, ": http://localhost:").concat(port))); });
exports.default = app;
