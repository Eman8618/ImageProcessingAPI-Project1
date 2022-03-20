"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ResImF_1 = __importDefault(require("../ResImF"));
var fs = require("fs");
var routes = express_1.default.Router();
// To Resize images and save it in folder Thumbnail
routes.get("/Thumbnail/imagename/:imagename/width/:width/height/:height", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // print url of resized image 
                console.log(req.url);
                if (!((isNaN(Number(req.params.width)) || isNaN(Number(req.params.width))) || Number(req.params.width) <= 0 || Number(req.params.height) <= 0)) return [3 /*break*/, 1];
                console.log('Invalid values for width and height');
                res.send('Invalid values for width and height');
                return [3 /*break*/, 3];
            case 1: 
            // check if images exists on OrSImage folder or not 
            return [4 /*yield*/, fs.access("OrSImage/".concat(req.params.imagename), function (Imnotexist) {
                    if (!Imnotexist) {
                        // print that Image  exists on console
                        console.log('Image exists');
                        // Check if resized image is existed before 
                        fs.access("Thumbnail/".concat(req.params.width, "-").concat(req.params.height, "-").concat(req.params.imagename), function (Notexist) {
                            //If image not resized  Then apply resizing function " ImResF "
                            if (Notexist) {
                                {
                                    console.log('Image is being resized');
                                    (0, ResImF_1.default)("OrSImage/".concat(req.params.imagename), Number(req.params.width), Number(req.params.height), "Thumbnail/".concat(req.params.width, "-").concat(req.params.height, "-").concat(req.params.imagename));
                                    res.send('Image is being resized please reload this url to access the resized image');
                                    return;
                                }
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
                })];
            case 2:
                // check if images exists on OrSImage folder or not 
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = routes;
