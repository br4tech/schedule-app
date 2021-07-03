export interface Reservation {
  id: number;
  date: string;
  time_start: string;
  time_end: string;
  hours: number;
  detached: boolean;
  canceled: boolean;
  contract_id: number;
  client_name: string;
  unit_code: number;
  unit_name: string;
  office_name: string;
}