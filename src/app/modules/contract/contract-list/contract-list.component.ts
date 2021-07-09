import { Component, OnInit } from '@angular/core';

import { ContractService } from '../contract.service';
import { Contract } from '../../../shared/models/contract'
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html'
})

export class ContractListComponent implements OnInit {

  contract = {} as Contract;
  contracts: Contract[] = [];

  constructor(
    private contractService: ContractService,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.getContracts();
  }

  getContracts() {
    this.contractService.getContracts().subscribe((contracts: any) => {      
      this.contracts = contracts.contracts;
    });
    this.ngxService.stop(); 
  }

}
