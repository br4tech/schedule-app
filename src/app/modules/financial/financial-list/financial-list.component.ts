import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-financial-list',
  templateUrl: './financial-list.component.html'
})

export class FinancialListComponent implements OnInit {

  bills: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
   this.activatedRoute.data.subscribe((data) => {
     this.bills = data.item.bills
    })
  }
}
