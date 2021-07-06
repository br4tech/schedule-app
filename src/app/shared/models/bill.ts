import { BillItem } from "./bill-item";

export class Bill {
  id: number;
  contract_name: string;
  emission: string;
  starts_at: string;
  ends_at: string;
  status: boolean;
  revenues_at: string;
  amount: string;
  payroll_items: BillItem[]
}
