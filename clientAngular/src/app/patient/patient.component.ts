import { Component, OnInit } from '@angular/core';
import {CabinetMedicalService} from '../cabinet-medical.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private cms: CabinetMedicalService) { }

  ngOnInit() {
  }

}
