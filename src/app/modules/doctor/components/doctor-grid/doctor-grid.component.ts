import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-grid',
  templateUrl: './doctor-grid.component.html',
  styleUrls: ['./doctor-grid.component.scss']
})
export class DoctorGridComponent implements OnInit {
  
  @Input() clients: any[] = [];

  constructor() { }

  ngOnInit(): void {
    debugger;
  }

}
