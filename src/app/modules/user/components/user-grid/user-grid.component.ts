import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss']
})
export class UserGridComponent implements OnInit {
  
  @Input() users: any[] = [];
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
