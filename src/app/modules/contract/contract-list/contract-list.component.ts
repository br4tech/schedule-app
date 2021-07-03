import { Component, OnInit } from '@angular/core';

import { ContractService } from '../contract.service';
import { Contract } from '../../../shared/models/contract'

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html'
})

export class ContractListComponent implements OnInit {

  contract = {} as Contract;
  contracts: Contract[] = [];

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.getContracts();
  }

  getContracts() {
    this.contractService.getContracts().subscribe((contracts: any) => {
      debugger
      this.contracts = contracts.contracts;
    });
  }

}
