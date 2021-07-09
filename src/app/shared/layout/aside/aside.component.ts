import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SettingsService } from 'src/app/modules/settings/settings.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})

export class AsideComponent implements OnInit {
  offices:  any;

  constructor(
    private settingsService: SettingsService,
    private ngxService: NgxUiLoaderService
    ) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.getOffices();
  }

  getOffices(){
    this.settingsService.getOffices().subscribe((data : any) => {
      this.offices = data.offices; 
      this.ngxService.stop();   
    });
  }
}
