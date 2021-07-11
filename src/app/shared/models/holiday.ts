import { DayOff } from "./day_office";

export interface Holiday{    
  id: number;
  name: string;
  starts_at: string;
  ends_at: string;
  day_offs: DayOff[];      
}