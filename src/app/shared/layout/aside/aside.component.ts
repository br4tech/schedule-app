import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/modules/settings/settings.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})

export class AsideComponent implements OnInit {
  offices:  any;

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.getOffices();
  }

  getOffices(){
    this.settingsService.getOffices().subscribe((data : any) => {
      this.offices = data.offices;     
    });
  }
}
