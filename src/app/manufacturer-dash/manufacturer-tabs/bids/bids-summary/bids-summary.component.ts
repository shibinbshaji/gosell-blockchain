import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bids-summary',
  templateUrl: './bids-summary.component.html',
  styleUrls: ['./bids-summary.component.scss']
})
export class BidsSummaryComponent implements OnInit {

  auctionID = "12345";
  bidItem = "Tea Leaves";
  bidQty = "40 kgs";
  bidderNos = "08";

  constructor() { }

  stopAuction(){
    
  }

  ngOnInit() {
  }

}
