import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ContractEditComponent } from 'src/app/modules/contract/contract-edit/contract-edit.component';
import { SettingsService } from 'src/app/modules/settings/settings.service';
import { ModalService } from '../../components/modal/modal.service';
import { Contract } from '../../models/contract';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})

export class AsideComponent implements OnInit {
  offices:  any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private settingsService: SettingsService,
    private ngxService: NgxUiLoaderService,
    private modalService: ModalService
    ) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.activatedRoute.data.subscribe((data) => {
     this.offices = data.office.offices
    });  
  }

  reservationWithContract(){
    let contract: Contract
    this.modalService.openReservationWithContract(contract)
  }

  reservationWithOutContract(){
    this.modalService.openReservationWithOutContract()
  }
}
