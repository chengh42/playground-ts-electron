"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var main_1 = require("electron/main");
var path_1 = __importDefault(require("path"));
electron_1.app.on('ready', function () {
    console.log('App is ready');
});
var win = new main_1.BrowserWindow({
    width: 600,
    height: 400
});
var indexHTML = path_1.default.join(__dirname + '/index.html');
win.loadFile(indexHTML).then(function () {
    // IMPLEMENT FANCY STUFF HERE
});
