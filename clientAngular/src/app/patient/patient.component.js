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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const cabinet_medical_service_1 = require("../cabinet-medical.service");
let PatientComponent = class PatientComponent {
    constructor(cms) {
        this.cms = cms;
    }
    ngOnInit() {
    }
};
PatientComponent = __decorate([
    core_1.Component({
        selector: 'app-patient',
        templateUrl: './patient.component.html',
        styleUrls: ['./patient.component.css']
    }),
    __metadata("design:paramtypes", [cabinet_medical_service_1.CabinetMedicalService])
], PatientComponent);
exports.PatientComponent = PatientComponent;
//# sourceMappingURL=patient.component.js.map