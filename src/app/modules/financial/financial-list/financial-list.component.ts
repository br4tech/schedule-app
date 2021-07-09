import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-financial-list',
  templateUrl: './financial-list.component.html'
})

export class FinancialListComponent implements OnInit {

  bills: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(){
    this.ngxService.start(); 
    this.activatedRoute.data.subscribe((data) => {
      this.bills = data.item.bills
    })
    this.ngxService.stop(); 
  }
}
