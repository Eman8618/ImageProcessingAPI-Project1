"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs = require("fs");
var routes = express_1.default.Router();
var routes1_1 = __importDefault(require("./routes1"));
var routes2_1 = __importDefault(require("./routes2"));
routes.use('/', routes1_1.default);
routes.use('/', routes2_1.default);
exports.default = routes;
