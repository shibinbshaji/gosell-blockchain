import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufacturer-dash',
  templateUrl: './manufacturer-dash.component.html',
  styleUrls: ['./manufacturer-dash.component.scss']
})
export class ManufacturerDashComponent implements OnInit {

  name = "Govind";
  id = "ABC123"

  constructor() { }

  ngOnInit() {
  }

}
