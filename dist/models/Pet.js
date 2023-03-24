"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Errors_1 = require("../helpers/Errors");
var Pet = /** @class */ (function () {
    function Pet(name, kind, age) {
        if (arguments.length < 3) {
            throw new Errors_1.MissingDataError();
        }
        this.name = name;
        this.kind = kind || "";
        this.age = age || 0;
    }
    Pet.prototype.describe = function () {
        return "".concat(this.name, ", ").concat(this.kind, ", ").concat(this.age, " years");
    };
    Pet.prototype.toJSON = function () {
        var ret = {};
        for (var _i = 0, _a = Object.keys(this); _i < _a.length; _i++) {
            var prop = _a[_i];
            ret[prop] = this[prop];
        }
        return ret;
    };
    return Pet;
}());
exports.default = Pet;
