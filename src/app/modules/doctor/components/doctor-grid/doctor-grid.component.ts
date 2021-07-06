import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-grid',
  templateUrl: './doctor-grid.component.html',
  styleUrls: ['./doctor-grid.component.scss']
})
export class DoctorGridComponent implements OnInit {
  
  @Input() clients: any[] = [];
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
