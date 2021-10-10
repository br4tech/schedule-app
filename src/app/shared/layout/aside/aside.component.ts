import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ContractEditComponent } from 'src/app/modules/contract/contract-edit/contract-edit.component';
import { SettingsService } from 'src/app/modules/settings/settings.service';
import { ModalService } from '../../components/modal/modal.service';
import { Contract } from '../../models/contract';
import { ModalWithContract } from '../../models/modal-with-contract';
import { Office } from '../../models/office';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})

export class AsideComponent implements OnInit {
  offices:  Office[];
  contracts: Contract[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private ngxService: NgxUiLoaderService,
    private modalService: ModalService
    ) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.activatedRoute.data.subscribe((data) => {
     this.contracts = data.contract.contracts
     this.offices = data.office.offices
    });  
  }

  reservationWithContract(){
    let modalWithContract= new ModalWithContract(this.contracts, this.offices)
    this.modalService.openReservationWithContract(modalWithContract)
  }

  reservationWithOutContract(){
    this.modalService.openReservationWithOutContract(this.offices)
  }
}
