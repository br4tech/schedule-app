import { PayrollItem } from "./payroll-item";

export class Payroll {
  id: number;
  contract_name: string;
  emission: string;
  starts_at: string;
  ends_at: string;
  status: boolean;
  revenues_at: string;
  amount: string;
  payroll_items: PayrollItem[]
}
