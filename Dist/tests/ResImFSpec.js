"use strict";
// Importing sharp  
//import sharp  from 'sharp';
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
var sharp = require("sharp");
// Importing app from ResImF.ts file
var ResImF_1 = __importDefault(require("../ResImF"));
var fs = require("fs");
//Test 1 for the resizing function when image exists on original folder but not be resized
//with that acceptable with and height
// Describe the test
describe('Test #1::Testing Of Resizing an Image', function () {
    it('Getting Resizing Image', function () { return __awaiter(void 0, void 0, void 0, function () {
        var width_1, height_1, imagename_1, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    width_1 = 111;
                    height_1 = 400;
                    imagename_1 = 'palmtunnel.jpg';
                    // Check if resized image is existed before 
                    return [4 /*yield*/, fs.access("Thumbnail/".concat(width_1, "-").concat(height_1, "-").concat(imagename_1), function (Notexist) {
                            //If image not resized  Then apply resizing function " ImResF "
                            (0, ResImF_1.default)("OrSImage/".concat(imagename_1), width_1, height_1, "Thumbnail/".concat(width_1, "-").concat(height_1, "-palmtunnel.jpg"));
                            expect('Image Resized Successfully');
                        })];
                case 1:
                    // Check if resized image is existed before 
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log('Image cannot be resized you need to check Image existance on the original folder & the values of width and height ');
                    return [2 /*return*/, 'Image cannot be resized you need to check Image existance on the original folder & the values of width and height '];
                case 3: return [2 /*return*/];
            }
        });
    }); });
});
//Test 2 for the resizing function when image maybe not exists on original folder 
// Describe the test
describe('Test #2 :: Testing Of Resizing an Image', function () {
    it('Getting Resizing Image', function () { return __awaiter(void 0, void 0, void 0, function () {
        var width_2, height_2, imagename_2, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    width_2 = 121;
                    height_2 = 33;
                    imagename_2 = 'palmtnnel.jpg';
                    // Check if resized image is existed before 
                    return [4 /*yield*/, fs.access("Thumbnail/".concat(width_2, "-").concat(height_2, "-").concat(imagename_2), function (Notexist) {
                            //If image not resized  Then apply resizing function " ImResF "
                            //if (Notexist) {
                            (0, ResImF_1.default)("OrSImage/".concat(imagename_2), width_2, height_2, "Thumbnail/".concat(width_2, "-").concat(height_2, "-palmtunnel.jpg"));
                            expect('Image Resized Successfully');
                        })];
                case 1:
                    // Check if resized image is existed before 
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    console.log('Image cannot be resized you need to check Image existance on the original folder & the values of width and height ');
                    return [2 /*return*/, 'Image cannot be resized you need to check Image existance on the original folder & the values of width and height '];
                case 3: return [2 /*return*/];
            }
        });
    }); });
});
//Test 3 for the resizing function when  the values of width & height are Invalid
// Describe the test
describe('Test #3 :: Testing Of Resizing an Image', function () {
    it('Getting Resizing Image', function () { return __awaiter(void 0, void 0, void 0, function () {
        var width_3, height_3, imagename_3, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    width_3 = 121;
                    height_3 = -33;
                    imagename_3 = 'palmtunnel.jpg';
                    if (!((width_3) < 0 || height_3 < 0)) return [3 /*break*/, 1];
                    console.log('===================================');
                    console.log('Invalid values for width and height');
                    return [3 /*break*/, 3];
                case 1: 
                // Check if resized image is existed before 
                return [4 /*yield*/, fs.access("Thumbnail/".concat(width_3, "-").concat(height_3, "-").concat(imagename_3), function (Notexist) {
                        //If image not resized  Then apply resizing function " ImResF "
                        //if (Notexist) {
                        (0, ResImF_1.default)("OrSImage/".concat(imagename_3), width_3, height_3, "Thumbnail/".concat(width_3, "-").concat(height_3, "-palmtunnel.jpg"));
                        expect('Image Resized Successfully');
                    })];
                case 2:
                    // Check if resized image is existed before 
                    _a.sent();
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    err_3 = _a.sent();
                    console.log('Image cannot be resized you need to check Image existance on the original folder & the values of width and height ');
                    return [2 /*return*/, 'Image cannot be resized you need to check Image existance on the original folder & the values of width and height '];
                case 5: return [2 /*return*/];
            }
        });
    }); });
});
