import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/shared/models/client';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

  clients: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {    
    this.activatedRoute.data.subscribe((data) => {
     this.clients = data.item.clients
    })
  } 
}
