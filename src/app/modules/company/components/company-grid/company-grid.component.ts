import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-grid',
  templateUrl: './company-grid.component.html',
  styleUrls: ['./company-grid.component.scss']
})
export class CompanyGridComponent implements OnInit {

  @Input() companies: any[] = []; 

  constructor() { }

  ngOnInit(): void {
  }

}
