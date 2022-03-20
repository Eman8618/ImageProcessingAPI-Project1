"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes/routes"));
var app = (0, express_1.default)();
//const fs =require("fs");
var port = '3000';
//To Access the images with their origial size
app.use('/OrSImage', express_1.default.static('OrSImage'));
app.get('/', function (req, res) {
    //Print url on console
    console.log(req.url);
    res.send("Server is started working on port ".concat(port));
});
// Resizing Image from the middleware route.ts
app.use('/', routes_1.default);
// Server is starting on port 3000
app.listen(port, function () { console.log(("Server is listening on port number ".concat(port, ": http://localhost:").concat(port))); });
exports.default = app;
