import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Payroll } from 'src/app/shared/models/payroll';
@Component({
  selector: 'app-financial-list',
  templateUrl: './financial-list.component.html'
})

export class FinancialListComponent implements OnInit {

  payrolls: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
   this.activatedRoute.data.subscribe((info) => {
     this.payrolls = info.payrolls
    })
  }
}
