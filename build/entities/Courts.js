"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Reservations_1 = __importDefault(require("./Reservations"));
var Court = /** @class */ (function () {
    function Court() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
        __metadata("design:type", Number)
    ], Court.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar', { length: 150 }),
        __metadata("design:type", String)
    ], Court.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar', { length: 40 }),
        __metadata("design:type", String)
    ], Court.prototype, "type", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Court.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Court.prototype, "updated_at", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Reservations_1.default; }, function (reservation) { return reservation.courts; }),
        __metadata("design:type", Array)
    ], Court.prototype, "reservations", void 0);
    Court = __decorate([
        (0, typeorm_1.Entity)('court')
    ], Court);
    return Court;
}());
exports.default = Court;
