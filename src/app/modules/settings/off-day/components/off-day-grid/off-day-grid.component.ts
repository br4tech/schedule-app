import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-off-day-grid',
  templateUrl: './off-day-grid.component.html',
  styleUrls: ['./off-day-grid.component.scss']
})
export class OffDayGridComponent implements OnInit {

  @Input() holidays: any[] = [];
  isShown: boolean = false;
  cell: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleShow(id: number) {
    this.cell = id
    this.isShown = !this.isShown;
  }

}
