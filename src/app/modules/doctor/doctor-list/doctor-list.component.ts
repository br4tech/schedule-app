import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

  clients: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {  
    this.ngxService.start();  
    this.activatedRoute.data.subscribe((data) => {
     this.clients = data.item.clients
    })
    this.ngxService.stop();  
  } 
}
