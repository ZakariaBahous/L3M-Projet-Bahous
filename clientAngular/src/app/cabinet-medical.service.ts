import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {CabinetInterface} from './dataInterfaces/cabinet';
import {PatientInterface} from './dataInterfaces/patient';
import {sexeEnum} from './dataInterfaces/sexe';
import {InfirmierInterface} from './dataInterfaces/infirmier';
import {Adresse} from './dataInterfaces/adresse';
@Injectable({
  providedIn: 'root'
})
export class CabinetMedicalService {
  private cabinet: CabinetInterface;
  private patient: PatientInterface;
  private infirmierId: InfirmierInterface;
  private test: PatientInterface;
  private infitest: InfirmierInterface;

  constructor(private _http: HttpClient) {
   this.getData('/data/cabinetInfirmier.xml');
   this.addPatient(this.test);
   this.affecter();
  }

  async getData(url: string): Promise<CabinetInterface> {
    try {
      const res: HttpResponse<string> = await this._http.get(url, {observe: 'response', responseType: 'text'}).toPromise();
      const parser = new DOMParser();
      const doc = parser.parseFromString(res.body, 'text/xml');
      console.log(doc);
    } catch (err) {
      console.error('ERROR in getData', err);
    }
    return null;
  }
  public async addPatient(patient: PatientInterface): Promise<PatientInterface> {
    const res = await this._http.post('/addPatient', {
      patientName: patient.nom,
      patientForname: patient.prénom,
      patientNumber: patient.numéroSécuritéSociale,
      patientSex: patient.sexe === sexeEnum.M ? 'M' : 'F',
      patientBirthday: 'AAAA-MM-JJ',
      patientFloor: patient.adresse.étage,
      patientStreetNumber: patient.adresse.numéro,
      patientStreet: patient.adresse.rue,
      patientPostalCode: patient.adresse.codePostal,
      patientCity: patient.adresse.ville
    }, {observe: 'response'}).toPromise<HttpResponse<any>>();

    console.log('Add patient renvoie', res);
    if (res.status === 200) {
      // OK on peut ajouter en local
      this.cabinet.patientsNonAffectés.push( patient );
    }
    return null;
  }
  async affecter () {
    this._http.post( '/affectation', {
      infirmier: this.infirmierId,
      patient: this.patient.numéroSécuritéSociale
    }, {observe: 'response'});
  }
  async desaffecter () {
    this._http.post('afectation', {
      infirmier: 'none',
      patient: this.patient.numéroSécuritéSociale
    }, {observe: 'response'});
  }
}
