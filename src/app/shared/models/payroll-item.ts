export interface PayrollItem {
  id: number;
  period: string;
  clinic_id: number;
  hours: number;
  amount: number;
  created_at: string;
  updated_at: string;
  reservations_id: number;
  odd: boolean
}
