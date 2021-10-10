import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/modules/settings/settings.service';
import { City } from '../../models/city';
import { State } from '../../models/state';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  states: State[];
  cities: City[];

  constructor(
    private settingsService: SettingsService
  ) { }

  ngOnInit(): void {
   this.settingsService.getStates().subscribe(states => {
     this.states = states
   });   
  }

  onChangeState(event: any) {
    this.settingsService.getCities(event.value).subscribe(cities => {
      this.cities = cities
    })
  }
}
