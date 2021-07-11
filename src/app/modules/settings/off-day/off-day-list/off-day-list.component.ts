import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-off-day-list',
  templateUrl: './off-day-list.component.html',
  styleUrls: ['./off-day-list.component.scss']
})
export class OffDayListComponent implements OnInit {

  holidays: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.ngxService.start(); 
    this.activatedRoute.data.subscribe((data) => {
      this.holidays = data.item.holidays
    })
    this.ngxService.stop(); 
  }
}
