import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies : any

  constructor(
    private activatedRoute: ActivatedRoute,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.ngxService.start(); 
    this.activatedRoute.data.subscribe((data) => {
      this.companies = data.item.companies
    })
    this.ngxService.stop();
  }

}
