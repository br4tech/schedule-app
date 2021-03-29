import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Payroll } from 'src/app/shared/models/payroll';

declare var $: any;

@Component({
  selector: 'app-financial-grid',
  templateUrl: './financial-grid.component.html'
})

export class FinancialGridComponent implements OnInit {

  @Input() payrolls: any[] = [];
  isShown: boolean = false;
  cell: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  toggleShow(id: number) {
    this.cell = id
    this.isShown = !this.isShown;
  }
}
