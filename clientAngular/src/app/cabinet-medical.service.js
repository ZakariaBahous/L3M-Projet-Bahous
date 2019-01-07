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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const sexe_1 = require("./dataInterfaces/sexe");
let CabinetMedicalService = class CabinetMedicalService {
    constructor(_http) {
        this._http = _http;
        this.getData('/data/cabinetInfirmier.xml');
    }
    getData(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this._http.get(url, { observe: 'response', responseType: 'text' }).toPromise();
                const parser = new DOMParser();
                const doc = parser.parseFromString(res.body, 'text/xml');
                console.log(doc);
            }
            catch (err) {
                console.error('ERROR in getData', err);
            }
            return null;
        });
    }
    addPatient(patient) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this._http.post('/addPatient', {
                patientName: patient.nom,
                patientForname: patient.prénom,
                patientNumber: patient.numéroSécuritéSociale,
                patientSex: patient.sexe === sexe_1.sexeEnum.M ? 'M' : 'F',
                patientBirthday: 'AAAA-MM-JJ',
                patientFloor: patient.adresse.étage,
                patientStreetNumber: patient.adresse.numéro,
                patientStreet: patient.adresse.rue,
                patientPostalCode: patient.adresse.codePostal,
                patientCity: patient.adresse.ville
            }, { observe: 'response' }).toPromise();
            console.log('Add patient renvoie', res);
            if (res.status === 200) {
                // OK on peut ajouter en local
                this.cabinet.patientsNonAffectés.push(patient);
            }
            return null;
        });
    }
    affecter() {
        return __awaiter(this, void 0, void 0, function* () {
            this._http.post('/affectation', {
                infirmier: this.infirmierId,
                patient: this.patient.numéroSécuritéSociale
            }, { observe: 'response' });
        });
    }
    desaffecter() {
        return __awaiter(this, void 0, void 0, function* () {
            this._http.post('afectation', {
                infirmier: 'none',
                patient: this.patient.numéroSécuritéSociale
            }, { observe: 'response' });
        });
    }
};
CabinetMedicalService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], CabinetMedicalService);
exports.CabinetMedicalService = CabinetMedicalService;
//# sourceMappingURL=cabinet-medical.service.js.map