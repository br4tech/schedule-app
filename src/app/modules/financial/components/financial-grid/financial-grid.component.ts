import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-financial-grid',
  templateUrl: './financial-grid.component.html',
  styleUrls: ['./financial-grid.component.scss']
})
export class FinancialGridComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    var datatable = $('#kt_datatable').KTDatatable();
  }
}
