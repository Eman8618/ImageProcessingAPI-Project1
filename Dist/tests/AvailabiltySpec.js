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
var Availabilty_1 = __importDefault(require("../Availabilty"));
var fs = require("fs");
var routes1_1 = __importDefault(require("../routes/routes1"));
//Test 1 for the resizing function when image exists on original folder but not be resized
//with that acceptable width and height
// Describe the test
describe('Test #1::Testing Of The availability of existance of Image and values of height and width then Resizing an Image', function () {
    it('Getting Resizing Image If all parameters of it are available', function () { return __awaiter(void 0, void 0, void 0, function () {
        var width, height, imagename;
        return __generator(this, function (_a) {
            width = 111;
            height = 400;
            imagename = 'palmtunnel.jpg';
            // Check if resized image is existed before 
            routes1_1.default.get("/Thumbnail/imagename/:imagename/width/:width/height/:height", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fs.access("Thumbnail/".concat(req.params.width, "-").concat(req.params.height, "-").concat(req.params.imagename), function (err) { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: 
                                        //If image not resized  Then apply resizing function " ImResF "
                                        return [4 /*yield*/, (0, Availabilty_1.default)("OrSImage/".concat(imagename), width, height, req, res)];
                                        case 1:
                                            //If image not resized  Then apply resizing function " ImResF "
                                            _a.sent();
                                            expect(fs.access("Thumbnail/".concat(width, "-").concat(height, "-").concat(imagename), function (Notexist) {
                                                if (Notexist) {
                                                    'Image Resized Successfully';
                                                }
                                            }));
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); });
});
//Test 2 for the resizing function when image doesnot exist on original folder 
//with that acceptable width and height
// Describe the test
describe('Test #2::Testing Of The availability of existance of Image and values of height and width then Resizing an Image', function () {
    it('Unable To Getting Resizing Image when Image isnot  exist on the OrSImage folder', function () { return __awaiter(void 0, void 0, void 0, function () {
        var width, height, imagename;
        return __generator(this, function (_a) {
            width = 103;
            height = 400;
            imagename = 'palmtnnel.jpg';
            routes1_1.default.get("/Thumbnail/imagename/:imagename/width/:width/height/:height", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fs.access("Thumbnail/".concat(req.params.width, "-").concat(req.params.height, "-").concat(req.params.imagename), function (err) { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: 
                                        //If image not resized  Then apply resizing function " ImResF "
                                        return [4 /*yield*/, (0, Availabilty_1.default)("OrSImage/".concat(imagename), width, height, req, res)];
                                        case 1:
                                            //If image not resized  Then apply resizing function " ImResF "
                                            _a.sent();
                                            expect(fs.access("Thumbnail/".concat(width, "-").concat(height, "-").concat(imagename), function (exist) {
                                                if (exist) {
                                                    'Image Resized Successfully';
                                                }
                                                else {
                                                    expect('Image doesnot exist');
                                                }
                                            }));
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); });
});
//Test 3 for the resizing function when image exist on original folder 
//but one or both of  width and height arenot acceptable
// Describe the test
describe('Test #3::Testing Of The availability of existance of Image and values of height and width then Resizing an Image', function () {
    it('Unable To Getting Resizing Image when Image is exist on the OrSImage folder but one or both of  width and height arenot acceptable', function () { return __awaiter(void 0, void 0, void 0, function () {
        var width, height, imagename;
        return __generator(this, function (_a) {
            width = 103;
            height = 0;
            imagename = 'palmtunnel.jpg';
            routes1_1.default.get("/Thumbnail/imagename/:imagename/width/:width/height/:height", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fs.access("Thumbnail/".concat(req.params.width, "-").concat(req.params.height, "-").concat(req.params.imagename), function (err) { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: 
                                        //If image not resized  Then apply resizing function " ImResF "
                                        return [4 /*yield*/, (0, Availabilty_1.default)("OrSImage/".concat(imagename), width, height, req, res)];
                                        case 1:
                                            //If image not resized  Then apply resizing function " ImResF "
                                            _a.sent();
                                            expect(fs.access("Thumbnail/".concat(width, "-").concat(height, "-").concat(imagename), function (exist) {
                                                if (exist) {
                                                    'Image Resized Successfully';
                                                }
                                                else {
                                                    expect('Both Width & Height should be valid number>0');
                                                }
                                            }));
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); });
});
