import { Component, OnInit } from '@angular/core';
import {CabinetMedicalService} from '../cabinet-medical.service';

@Component({
  selector: 'app-infirmier',
  templateUrl: './infirmier.component.html',
  styleUrls: ['./infirmier.component.css']
})
export class InfirmierComponent implements OnInit {

  constructor(private cms: CabinetMedicalService) { }

  ngOnInit() {
  }

}
