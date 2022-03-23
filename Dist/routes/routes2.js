"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs = require("fs");
var routes2 = express_1.default.Router();
routes2.get("/Thumbnail/imagename/:imagename/width/:width/height/:height", function (req, res) {
    // Check the validation of width and height values for resizing images 
    if ((isNaN(Number(req.params.width)) ||
        isNaN(Number(req.params.width))) ||
        Number(req.params.width) <= 0 || Number(req.params.width) == null
        || Number(req.params.height) <= 0 || Number(req.params.height) == null) {
        res.send('The Image Cannot Be Resized Because Width And Height Should Be Valid Number > 0 ');
    }
    if (fs.access("OrSImage/".concat(req.params.imagename), function (Imnotexist) {
        if (Imnotexist || (req.params.imagename) == null) {
            res.send('The Image doesnot be found on the OrImage folder check name of it ');
        }
    }))
        return;
});
exports.default = routes2;
