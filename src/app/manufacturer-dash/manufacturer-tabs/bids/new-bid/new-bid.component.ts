import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-new-bid',
  templateUrl: './new-bid.component.html',
  styleUrls: ['./new-bid.component.scss']
})
export class NewBidComponent implements OnInit {

  foods: Food[] = [
    {value: 'teaLeaves', viewValue: 'Tea Leaves'},

  ];

  constructor() { }

  ngOnInit() {
  }

}
