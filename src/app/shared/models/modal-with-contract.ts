import { Contract } from "./contract";
import { Office } from "./office";

export class ModalWithContract {
  contracts: Contract[]
  offices: Office[]

  constructor(contracts: Contract[], offices: Office[]){
    this.contracts = contracts;
    this.offices = offices;
  }
}