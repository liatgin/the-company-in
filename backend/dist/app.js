"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server"));
var port = parseInt(process.env.PORT || '3000');
var starter = new server_1.default().start(port)
    .then(function (port) { return console.log("Running on port " + port); })
    .catch(function (error) {
    console.log(error);
});
exports.default = starter;
// import express from 'express';
// const app = express();
// const port = 3000;
// app.get('/', (req, res) => {
//   res.send('The sedulous hyena ate the antelope!');
// });
// app.listen(port, () => {
//   return console.log(`server is listening on ${port}`);
// });
