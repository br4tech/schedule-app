import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

  clients: Client[] = [];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {    
    this.getClients()
  }

  getClients() {
    this.doctorService.getClients().subscribe((clients: any) => {  
      debugger;    
      this.clients = clients;
    });
  }
}
