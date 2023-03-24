"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Errors_1 = require("../helpers/Errors");
var User = /** @class */ (function () {
    function User(firstname, lastname) {
        if (!firstname || !lastname) {
            throw new Errors_1.MissingDataError();
        }
        this.firstname = firstname;
        this.lastname = lastname;
        this.pets = [];
    }
    User.prototype.getFullname = function () {
        return "".concat(this.firstname, " ").concat(this.lastname);
    };
    User.prototype.addPet = function (pet) {
        var existing = this.getPet(pet.name, pet.kind);
        if (existing) {
            existing = pet;
            return pet;
        }
        this.pets.push(pet);
        return pet;
    };
    User.prototype.getPet = function (name, kind) {
        return this.pets.find(function (p) { return p.name === name && p.kind === kind; }) || null;
    };
    User.prototype.toJSON = function () {
        return {
            firstname: this.firstname,
            lastname: this.lastname,
            pets: this.pets.map(function (p) { return p.describe(); })
        };
    };
    return User;
}());
exports.default = User;
