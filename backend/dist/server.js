"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dbconnector_1 = __importDefault(require("./dbconfig/dbconnector"));
var Server = /** @class */ (function () {
    function Server() {
        var _this = this;
        this.start = function (port) {
            return new Promise(function (resolve, reject) {
                _this.app.listen(port, function () {
                    resolve(port);
                }).on('error', function (err) { return reject(err); });
            });
        };
        this.app = express_1.default();
        this.dbConnect();
    }
    Server.prototype.dbConnect = function () {
        dbconnector_1.default.connect(function (err) {
            if (err) {
                console.log('Error in DB', Error(err));
            }
            console.log('Connected');
        });
    };
    return Server;
}());
exports.default = Server;
