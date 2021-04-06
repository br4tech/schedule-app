import { Client } from "./client";
import { Office } from "./office";

export interface Contract {
  id: number;
  client_id: number;
  starts_at: string;
  ends_at: string;
  amount: number;
  revenues_at: number;
  due_at: number;
  forfeit: number;
  kind: number;
  rescheduling_allowed: number;
  parking: false,
  car_license_plate: null,
  category: number;
  created_at: string;
  updated_at: string;
  contract_combo_id: number;
  parking_value: string;
  rescheduling_used: number;
  client: Client
  offices: Office[];
}
